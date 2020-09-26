/**
 * A custom element that shows a HTML form from a set of quads.
 */
import { parse as ttl2jsonld } from '@frogcat/ttl2jsonld'
import { OntologyRepository } from './OntologyRepository'
import { PredicateMetaResolver } from './PredicateMetaResolver'
import { FormElementResolverRegistry } from './FormElementResolverRegistry'
import { FormElementRegistry } from './FormElementRegistry'
import { FormElementFactory } from './FormElementFactory'
import { DataTypes } from './FormElementResolvers/DataTypes'
import { Vcard } from './FormElementResolvers/Vcard'
import { Text } from './FormElements/Text'
import { SchemaOrg } from './UriChangers/SchemaOrg'
import { render, html } from 'uhtml'
import '../scss/style.scss'

import * as ActorHttpProxy from '@comunica/actor-http-proxy'

export class RdfForm extends HTMLElement {

  public predicateMetaResolver: PredicateMetaResolver
  public formElementFactory: FormElementFactory
  public formElementRegistry: FormElementRegistry
  public formElementResolverRegistry: FormElementResolverRegistry
  public ontologyRepository: OntologyRepository

  public jsonLdContext: object
  public proxy: string
  public language: string

  public formDefinition: object
  private data: object

  public childFormElements: Array<any> = []
  public structure: object = {}

  /**
   * When the element loads, fetch the quads from the resource,
   * The resource may be an URL or a text containing the quads.
   */
  async connectedCallback () {
    const proxyUrl = this.getAttribute('proxy')
    this.proxy = proxyUrl ? new (<any> ActorHttpProxy).ProxyHandlerStatic(proxyUrl) : null;
    this.language = this.getAttribute('lang') ?? 'en'

    this.predicateMetaResolver = new PredicateMetaResolver(this)
    this.formElementFactory = new FormElementFactory(this)
    this.formElementRegistry = new FormElementRegistry(this)
    this.formElementResolverRegistry = new FormElementResolverRegistry(this)
    this.ontologyRepository = new OntologyRepository(this)

    this.formElementResolverRegistry.register(DataTypes)
    this.formElementResolverRegistry.register(Vcard)
    this.formElementRegistry.register(Text)

    this.data = await this.attributeToJsonLd('data', true)
    this.formDefinition = await this.attributeToJsonLd('form-definition') ?? {}
    this.jsonLdContext = this.data['@context']
    delete this.data['@context']

    await this.formElementFactory.handleData(this.data, this.structure, this.childFormElements)
    this.render()
  }

  /**
   * Given an attribute name that is used on the custom element,
   * fetches the url if needed and converts to JSON-ld.
   *
   * @param name
   * @param required
   */
  async attributeToJsonLd (name, required = false): Promise<object> {
    let urlOrValue = this.getAttribute(name).trim()
    if (required && !urlOrValue) throw new Error(`The attribute ${name} does not have a content or does not exist`)

    if (urlOrValue.slice(-3)) {
      const response = await fetch(urlOrValue)
      urlOrValue = await response.text()
    }

    return urlOrValue ? ttl2jsonld(urlOrValue) : {}
  }

  render () {
    render(this, html`${Object.values(this.structure).map(formElement => formElement.render())}`)
  }
}

customElements.define('rdf-form', RdfForm);
