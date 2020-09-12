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
  private language: string

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
      this.quadNester = new QuadNester(this.quads)
      const promises = []
      for (const [quad, formElementData] of this.quadNester.quadReferences.entries()) {
        const predicate = quad.predicate?.id ?? quad.predicate?.value
        const promise = this.predicateMetaResolver.getFieldMeta(predicate).then(predicateMeta => {
          if (predicateMeta) {
            formElementData.predicateMeta = predicateMeta
            formElementData.type = FormElementResolverRegistry.resolve(quad, formElementData.predicateMeta)
            formElementData.formElement = FormElementRegistry.get(formElementData.type)
          }
        })
        promises.push(promise)
      }
      Promise.all(promises).then(() => {
        this.render()
        console.log(this.quadNester.quadReferences.size)
        console.log(this.quadNester.quads.length)
        const mainSubject = this.quadNester.nestedQuads.children[0].quads[0]
        const mainFormElementData = this.quadNester.quadReferences.get(mainSubject)
        console.log(this.quadNester.nestedQuads)
      })
    })
    quadStream.on('error', error => {
      console.error(error)
    })
  }

  render () {
    render(this, html`${this.quadNester.nestedQuads.children.map(
      child => {
        return child.formElement ? child.formElement[child.children.length ? 'group' : 'wrapper'](child) : ''
      })
    }`)
  }

  async dereferenceUrl (url) {
    const config = {}
    if (this.proxy) config['@comunica/actor-http-proxy:httpProxyHandler'] = this.proxy
    let { quads } = await rdfDereferencer.dereference(url, config)
    return quads
  }

  parseRdfText (rdf) {
    const type = this.getAttribute('type')
    if (!['text/turtle'].includes(type)) throw new Error('Unknown type')
    /** @see https://comunica.dev/docs/query/advanced/source_types/ */
    return rdfParser.parse(Streamify(rdf), { contentType: type });
  }

}

customElements.define('rdf-form', RdfForm);
