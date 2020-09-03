import * as Streamify from 'streamify-string'
import { FieldMetaResolver } from './FieldMetaResolver'
import * as ActorHttpProxy from '@comunica/actor-http-proxy'
import {render, html} from 'uhtml'

import rdfParser from 'rdf-parse'

interface FormStructure {
  id: string,
  children: Array<object>
}

export class RdfForm extends HTMLElement {

  private quads = []
  private subject: string
  private fieldMetaResolver: FieldMetaResolver
  readonly proxy: string
  readonly formStructure: FormStructure
  private references = new Map()

  constructor() {
    super();
    this.proxy = new (<any> ActorHttpProxy).ProxyHandlerStatic('https://cors-anywhere.herokuapp.com/');
    this.fieldMetaResolver = new FieldMetaResolver(this.proxy)
    this.formStructure = {
      children: [],
      id: null
    }
  }

  async connectedCallback () {
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
      this.render()
    })
    quadStream.on('error', () => {})
  }

  async syncFormStructure () {
    for (const quad of this.quads) {
      let reference = this.references.get(quad?.subject?.id)

      if (!reference) {
        reference = await this.createSubject(quad?.subject?.id)
      }

      // We check if we have a reference, if no reference is found the RDF was incomplete.
      let child = reference.children.find(child => child.quad === quad)

      if (reference && !this.references.has(quad.object?.id) && !child) {
        const fieldMeta = await this.fieldMetaResolver.getFieldMeta(quad?.predicate?.id)

        reference.children.push({
          quad: quad,
          fieldMeta: fieldMeta
        })
      }
    }
  }

  async createSubject (subject) {
    const subjectquad = this.quads.find(quad => quad?.object?.id === subject)

    // Assign the main subject.
    if (!subjectquad) {
      this.formStructure.id = subject
      this.references.set(subject, this.formStructure)
      return this.formStructure
    }

    if (subjectquad && subjectquad?.subject?.id) {
      const reference = this.references.get(subjectquad.subject.id)

      if (reference) {
        let child = reference.children.find(child => child.quad === subjectquad)

        if (!child) {
          const fieldMeta = await this.fieldMetaResolver.getFieldMeta(subjectquad?.predicate?.id)

          child = {
            children: [],
            id: subject,
            quad: subjectquad,
            fieldMeta: fieldMeta
          }
          this.references.set(subject, child)
          reference.children.push(child)
        }

        return child
      }
    }
  }

  render () {
    const fieldTemplate = (field) => html`<div class="${'field ' + (field.children && field.children.length ? 'group' : '')}">
        <label>${field.fieldMeta.label}</label>

        ${!field.children ? html`
            <input type="text" value="${field.quad.object.id}">
        ` : ''}

        <small>${field.fieldMeta.comment}</small>

        ${field.children && field.children.length ? html`
          <div class="children">
          ${field.children.map(child => fieldTemplate(child))}
          </div>
        ` : ''}
    </div>`

    render(this, html`
      ${this.formStructure.children.map(child => fieldTemplate(child))}
    `)
  }
}

customElements.define('rdf-form', RdfForm);
