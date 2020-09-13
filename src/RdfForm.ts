/**
 * A custom element that shows a HTML form from a set of quads.
 */
import { QuadNester } from './QuadNester'
import { PredicateMetaResolver } from './PredicateMetaResolver'
import { FormElementResolverRegistry } from './FormElementResolverRegistry'
import { FormElementRegistry } from './FormElementRegistry'
import { DataTypes } from './FormElementResolvers/DataTypes'
import { Text } from './FormElements/Text'
import { render, html } from 'uhtml'
import '../scss/style.scss'

import * as Streamify from 'streamify-string'
import * as ActorHttpProxy from '@comunica/actor-http-proxy'

import rdfDereferencer from 'rdf-dereference'
import rdfParser from 'rdf-parse'

FormElementResolverRegistry.register(DataTypes)
FormElementRegistry.register(Text)

export class RdfForm extends HTMLElement {

  private predicateMetaResolver: PredicateMetaResolver
  private quadNester: QuadNester
  private quads = []

  private proxy: string
  public language: string

  /**
   * When the element loads, fetch the quads from the resource,
   * The resource may be an URL or a text containing the quads.
   */
  async connectedCallback () {
    const proxyUrl = this.getAttribute('proxy')
    this.proxy = proxyUrl ? new (<any> ActorHttpProxy).ProxyHandlerStatic(proxyUrl) : null;
    this.language = this.getAttribute('lang') ?? 'en'
    this.predicateMetaResolver = new PredicateMetaResolver(this.proxy, this.language)

    const url = this.getAttribute('url') ? this.getAttribute('url').trim() : null
    const rdf = this.getAttribute('rdf') ? this.getAttribute('rdf').trim() : null

    if (url && rdf) throw new Error('Only one data source can be used')
    if (!url && !rdf) throw new Error('A data source must be used')

    const quadStream = url ? await this.dereferenceUrl(url) : this.parseRdfText(rdf)
    quadStream.on('data', quad => {
      this.quads.push(quad)
    })
    quadStream.on('end', async () => {
      this.processQuads()
    })
    quadStream.on('error', error => {
      console.error(error)
    })
  }

  /**
   * Fetches the resource quads via URL.
   * @param url
   */
  async dereferenceUrl (url) {
    const config = {}
    if (this.proxy) config['@comunica/actor-http-proxy:httpProxyHandler'] = this.proxy
    let { quads } = await rdfDereferencer.dereference(url, config)
    return quads
  }

  /**
   * Fetches the resource quads via text.
   * @param rdf
   */
  parseRdfText (rdf) {
    const type = this.getAttribute('type')
    if (!['text/turtle'].includes(type)) throw new Error('Unknown type')
    /** @see https://comunica.dev/docs/query/advanced/source_types/ */
    return rdfParser.parse(Streamify(rdf), { contentType: type });
  }

  /**
   * When everything is fetched, the data needs to be structured.
   * After that all the formElement types need to be resolved and finally rendered.
   */
  processQuads () {
    this.quadNester = new QuadNester(this.quads)
    const promises = []
    for (const [quad, formElementData] of this.quadNester.quadReferences.entries()) {
      const predicate = quad.predicate?.id ?? quad.predicate?.value
      const promise = this.predicateMetaResolver.getFieldMeta(predicate).then(predicateMeta => {
        if (predicateMeta) formElementData.predicateMeta = predicateMeta
      })
      promises.push(promise)
    }

    Promise.all(promises).then(() => {
      for (const formElementData of this.quadNester.formElementReferences) {
        const quad = formElementData.quads?.[0]
        formElementData.type = quad && formElementData.predicateMeta ? FormElementResolverRegistry.resolve(quad, formElementData.predicateMeta) : 'text'
        formElementData.formElement = FormElementRegistry.get(formElementData.type, formElementData, this)
      }

      render(this, html`${this.quadNester.structure.map(
        child => {
          return child.formElement ? child.formElement.templateWrapper(child) : ''
        })
      }`)
    })
  }

}

customElements.define('rdf-form', RdfForm);
