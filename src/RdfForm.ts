import * as Streamify from 'streamify-string'
import { FieldMetaResolver } from './FieldMetaResolver'
import * as ActorHttpProxy from '@comunica/actor-http-proxy'
import { RendererUhtml, Renderer } from './RendererUhtml'
import rdfDereferencer from 'rdf-dereference'

import rdfParser from 'rdf-parse'

interface FormStructure {
  id: string,
  children: Array<any>
}

export class RdfForm extends HTMLElement {

  private quads = []
  private processedQuads = []
  private subject: string
  private renderer: Renderer
  private fieldMetaResolver: FieldMetaResolver
  private proxy: string
  private language: string
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
    this.language = this.getAttribute('lang')
    this.fieldMetaResolver = new FieldMetaResolver(this.proxy, this.language)
    this.renderer = new RendererUhtml()

    const url = this.getAttribute('url') ? this.getAttribute('url').trim() : null
    const rdf = this.getAttribute('rdf') ? this.getAttribute('rdf').trim() : null

    if (url && rdf) throw new Error('Only one data source can be used')
    if (!url && !rdf) throw new Error('A data source must be used')

    const quadStream = url ? await this.dereferenceUrl(url) : this.parseRdfText(rdf)
    quadStream.on('data', quad => {
      this.quads.push(quad)
    })
    quadStream.on('end', async () => {
      await this.syncFormStructure()
      console.log(this.formStructure)
      this.renderer.render(this, this.formStructure)
    })
    quadStream.on('error', error => {
      console.error(error)
    })
  }

  async dereferenceUrl (url) {
    const config = {}

    if (this.proxy) {
      config['@comunica/actor-http-proxy:httpProxyHandler'] = this.proxy
    }

    let {quads} = await rdfDereferencer.dereference(url, config);
    return quads
  }

  parseRdfText (rdf) {
    const type = this.getAttribute('type')
    if (!['text/turtle'].includes(type)) throw new Error('Unknown type')
    /** @see https://comunica.dev/docs/query/advanced/source_types/ */
    return rdfParser.parse(Streamify(rdf), { contentType: type });
  }

  async syncFormStructure () {
    for (let quad of this.quads) {
      const subject = quad?.subject?.id ?? quad?.subject?.value
      const object = quad?.object?.id ?? quad?.object?.value

      let reference = this.references.get(subject)
      if (!reference) reference = await this.createSubject(subject)

      if (reference) {
        // We check if we have a reference, if no reference is found the RDF was incomplete.
        let child = reference.children.find(child => child.quad === quad)

        if (reference && !this.references.has(object) && !child) {
          const newField = await this.createField(quad)
          if (newField) reference.children.push(newField)
        }
      }
    }
  }

  async createField (quad, id = null) {
    if (this.processedQuads.includes(quad) && id === null) return false
    const predicate = quad?.predicate?.id ?? quad?.predicate?.value

    const fieldMeta = await this.fieldMetaResolver.getFieldMeta(predicate)

    if (!fieldMeta) return false

    const quads = this.quads.filter(innerQuad =>
      innerQuad.predicate.equals(quad.predicate) &&
      innerQuad.subject.equals(quad.subject)
    )
    this.processedQuads.push(...quads)

    const item = {
      children: [],
      quads: quads,
      id: null,
      fieldMeta: fieldMeta,
      language: this.language,
      templates: this.renderer.getTemplates(),
      get label () {
        return this.fieldMeta?.label?.[this.fieldMeta?.label?.[this.language] ? this.language : 'default']
      },

      get description () {
        return this.fieldMeta?.comment?.[this.fieldMeta?.comment?.[this.language] ? this.comment : 'default']
      },
    }

    if (id) item.id = id

    return item
  }

  async createSubject (subject) {
    const subjectQuad = this.quads.find(quad => quad?.object?.id ?? quad?.object?.value === subject)

    // Assign the main subject.
    if (!subjectQuad) {
      this.formStructure.id = subject
      this.references.set(subject, this.formStructure)
      return this.formStructure
    }

    const subjectValue = subjectQuad?.subject?.id ?? subjectQuad?.subject?.value

    if (subjectQuad && subjectValue) {
      const reference = this.references.get(subjectValue)

      if (reference) {
        let child = reference.children.find(child => child.quad === subjectQuad)

        if (!child) {
          child = await this.createField(subjectQuad, subject)

          if (child) {
            this.references.set(subject, child)
            reference.children.push(child)
          }
        }

        return child
      }
    }
  }
}

customElements.define('rdf-form', RdfForm);
