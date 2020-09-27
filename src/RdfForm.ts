/**
 * A custom element that shows a HTML form from a turtle file.
 */
import { OntologyRepository } from './OntologyRepository'
import { PredicateMetaResolver } from './PredicateMetaResolver'
import { FormElementResolverRegistry } from './FormElementResolverRegistry'
import { FormElementRegistry } from './FormElementRegistry'
import { FormElementFactory } from './FormElementFactory'
import { DataTypes } from './FormElementResolvers/DataTypes'
import * as ActorHttpProxy from '@comunica/actor-http-proxy'
import { Vcard } from './FormElementResolvers/Vcard'
import { String } from './FormElements/String'
import { Uri } from './FormElements/Uri'
import { Textarea } from './FormElements/Textarea'
import { getCountries, getLanguages, cachePromiseOutput, attributeToJsonLd, attributeToQuads } from './Helpers'
import { render, html } from 'uhtml'
import '../scss/style.scss'

export class RdfForm extends HTMLElement {

  public predicateMetaResolver: PredicateMetaResolver
  public formElementFactory: FormElementFactory
  public formElementRegistry: FormElementRegistry
  public formElementResolverRegistry: FormElementResolverRegistry
  public ontologyRepository: OntologyRepository

  public jsonLdContext: object
  public proxy: string
  public countries: Array<any> = []
  public languages: object = {}
  public language: string

  public formDefinition: Array<any> = []
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
    this.formElementRegistry.register(String)
    this.formElementRegistry.register(Textarea)
    this.formElementRegistry.register(Uri)

    this.data = await attributeToJsonLd(this, 'data', true)
    this.jsonLdContext = this.data['@context']
    if (this.data?.['@graph'] && this.getAttribute('data').split('#').length > 1) {
      this.selectCorrectGraph()
    }

    // Check if a form definition can be found via the class.
    if (this.data?.['@type']) {
      const typeSplit = this.data['@type'].split(':')
      const typeUri = this.jsonLdContext[typeSplit[0]] + typeSplit[1]
      const typeQuads = await this.ontologyRepository.dereference(typeUri)
      const formQuad = typeQuads.find(quad => quad.predicate.id === 'http://rdf.danielbeeke.nl/form/form-dev.ttl#Form' && quad.subject.id === typeUri)
      if (formQuad) {
        const formUri = formQuad.object.id
        this.formDefinition = [...this.formDefinition, ... await this.ontologyRepository.dereference(formUri)]
      }
    }

    this.formDefinition = [...this.formDefinition, ... await attributeToQuads(this, 'form-definition')] ?? []
    delete this.data['@context']

    this.languages = await cachePromiseOutput(getLanguages, 3600, this)
    this.countries = await cachePromiseOutput(getCountries, 3600, this)

    await this.formElementFactory.handleData(this.data, this.structure, this.childFormElements)
    this.render()
  }

  /**
   * When multiple graphs were found at the data attribute URL, select the one after the #.
   */
  selectCorrectGraph () {
    // Multiple graphs were found at the url or inside the text.
    let found = false
    const urlId = this.getAttribute('data').split('#')[1]

    for (const graph of this.data['@graph']) {
      const id = graph['@id'].split(':')[1]
      if (id === urlId) {
        found = true
        this.data = graph
      }
    }

    if (!found) throw new Error(`Could not find the graph in the data that you requested: ${urlId}`)
  }

  render () {
    render(this, html`${Object.values(this.structure).map(formElement => formElement.templateWrapper())}`)
  }
}

customElements.define('rdf-form', RdfForm);
