import * as Streamify from 'streamify-string'
import { FieldMetaResolver } from './FieldMetaResolver'
import * as ActorHttpProxy from '@comunica/actor-http-proxy'
import {render, html} from 'uhtml'

import rdfParser from 'rdf-parse'

interface FormStructure {
  id: string,
  children: Array<any>
}

export class RdfForm extends HTMLElement {

  private quads = []
  private subject: string
  private fieldMetaResolver: FieldMetaResolver
  private proxy: string
  readonly formStructure: FormStructure
  private references = new Map()

  constructor() {
    super();
    this.formStructure = {
      children: [],
      id: null
    }
  }

  async connectedCallback () {
    const proxyUrl = this.getAttribute('proxy')
    this.proxy = proxyUrl ? new (<any> ActorHttpProxy).ProxyHandlerStatic(proxyUrl) : null;
    this.fieldMetaResolver = new FieldMetaResolver(this.proxy)

    const url = this.getAttribute('url') ? this.getAttribute('url').trim() : null
    const rdf = this.getAttribute('rdf') ? this.getAttribute('rdf').trim() : null

    if (url && rdf) throw new Error('Only one data source can be used')
    if (!url && !rdf) throw new Error('A data source must be used')

    if (rdf) await this.parseRdfText(rdf)
  }

  async parseRdfText (rdf) {
    const type = this.getAttribute('type')
    if (!['text/turtle'].includes(type)) throw new Error('Unknown type')
    /** @see https://comunica.dev/docs/query/advanced/source_types/ */
    const quadStream = rdfParser.parse(Streamify(rdf), { contentType: type });
    quadStream.on('data', quad => this.quads.push(quad))
    quadStream.on('end', async () => {
      await this.syncFormStructure()
      console.log(this.formStructure)
      this.render()
    })
    quadStream.on('error', error => {
      console.error(error)
    })
  }

  async syncFormStructure () {
    for (const quad of this.quads) {
      let reference = this.references.get(quad?.subject?.id)
      if (!reference) reference = await this.createSubject(quad?.subject?.id)

      if (reference) {
        // We check if we have a reference, if no reference is found the RDF was incomplete.
        let child = reference.children.find(child => child.quad === quad)

        if (reference && !this.references.has(quad.object?.id) && !child) {
          reference.children.push(await this.createField(quad))
        }
      }
    }
  }

  async createField (quad, id = null) {
    const fieldMeta = await this.fieldMetaResolver.getFieldMeta(quad?.predicate?.id)

    const item = {
      children: [],
      quad: quad,
      id: null,
      fieldMeta: fieldMeta,

      // These template functions may be overwritten.
      templates: {
        label: field => html`<label>${field.fieldMeta?.label}</label>`,
        item: field => !field.children.length ? html`<input type="text" value="${field.quad.object.id}">` : '',
        description: field => html`<small>${field.fieldMeta?.comment}</small>`,
        group: field => html`<details open>
          <summary>${field.fieldMeta?.label}</summary>
          ${html`<div class="children">${field.children.map(child => child.templates[child.children.length ? 'wrapper' : 'wrapper'](child))}</div>`}
        </details>`,
        wrapper: field => html`<div class="field">
          ${field.templates.label(field)}
          ${field.templates.item(field)}
          ${field.templates.description(field)}

          ${field.children && field.children.length ? html`
            <div class="children">${field.children.map(child => child.templates.wrapper(child))}</div>
          ` : ''}
        </div>`,
      }
    }

    if (id) {
      item.id = id
    }

    return item
  }

  async createSubject (subject) {
    const subjectQuad = this.quads.find(quad => quad?.object?.id === subject)

    // Assign the main subject.
    if (!subjectQuad) {
      this.formStructure.id = subject
      this.references.set(subject, this.formStructure)
      return this.formStructure
    }

    if (subjectQuad && subjectQuad?.subject?.id) {
      const reference = this.references.get(subjectQuad.subject.id)

      if (reference) {
        let child = reference.children.find(child => child.quad === subjectQuad)

        if (!child) {
          child = await this.createField(subjectQuad, subject)
          this.references.set(subject, child)
          reference.children.push(child)
        }

        return child
      }
    }
  }

  render () {
    render(this, html`${this.formStructure.children.map(child => child.templates[child.children.length ? 'group' : 'wrapper'](child))}`)
  }
}

customElements.define('rdf-form', RdfForm);
