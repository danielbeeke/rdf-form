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
import { newEngine } from '@comunica/actor-init-sparql'
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
  public countries: Array<any> = []
  public languages: object = {}
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
    await this.getLanguages()
    await this.getCountries()
    this.render()
  }

  async getLanguages () {
    const comunica = newEngine();
    const wikidataQuery = `
      PREFIX wdt: <http://www.wikidata.org/prop/direct/>

      SELECT ?code ?label WHERE {
        ?object wdt:P218 ?code .
        ?object rdfs:label ?label ;
        FILTER (lang(?label) = '${this.language}')
      }
      ORDER BY ASC(?label)
    `

    const result = await comunica.query(wikidataQuery, {
      sources: [{ value: 'https://query.wikidata.org/sparql', type: 'sparql' }],
    });

    /** @ts-ignore */
    const items = await result.bindings()

    this.languages = {}
    for (const item of items) {
      const code = item.get('?code').value
      const label = item.get('?label').value
      if (!this.languages[code]) this.languages[code] = []
      this.languages[code].push(label)
    }
  }

  async getCountries () {
    const quads = await this.ontologyRepository.dereference('https://www.w3.org/Consortium/Offices/Presentations/RDFTutorial/rdfs/Countries.owl')
    const countries = quads
      .filter(quad => quad.predicate.value === 'http://www.bpiresearch.com/BPMO/2004/03/03/cdl/Countries#countryCodeISO3166Alpha2')

    for (const countryQuad of countries) {
      let countryObject = { name: null }
      countryObject['subject'] = countryQuad.subject.value;
      const countryQuads = quads.filter(quad => quad.subject.value === countryQuad.subject.value)
      for (const innerQuad of countryQuads) {
        countryObject[innerQuad.predicate.value.split('#')[1]] = innerQuad.object.value
      }

      const countryMeta = quads.find(quad => quad.subject.value === countryObject['referencesCountry'] && quad.predicate.value === 'http://www.bpiresearch.com/BPMO/2004/03/03/cdl/Countries#nameEnglish')
      countryObject.name = countryMeta.object.value
      this.countries.push(countryObject)
    }

    this.countries.sort((a, b) => {
      if (a['name'] > b['name']) return 1;
      if (b['name'] > a['name']) return -1;

      return 0;
    })
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
    console.log('root render')
    render(this, html`${Object.values(this.structure).map(formElement => formElement.render())}`)
  }
}

customElements.define('rdf-form', RdfForm);
