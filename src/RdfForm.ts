/**
 * A custom element that shows a HTML form from a turtle file.
 */
import { OntologyRepository } from './OntologyRepository'
import { FormElementRegistry } from './FormElementRegistry'
import { expandAll, jsonLdToFormDefinition } from './jsonLdToFormDefinition'
import * as ActorHttpProxy from '@comunica/actor-http-proxy'

import { String } from './FormElements/String'
import { Textarea } from './FormElements/Textarea'
import { Subject } from './FormElements/Subject'
import { Reference } from './FormElements/Reference'

import { attributeToJsonLd, selectCorrectGraph } from './Helpers'
import { render, html } from 'uhtml'
import '../scss/style.scss'

export class RdfForm extends HTMLElement {

  public ontologyRepository: OntologyRepository
  public formElementRegistry: FormElementRegistry

  public jsonLdContext: object
  public proxy: string
  public language: string

  public formJsonLd: Object = {}
  public formDefinition: Map<any, any> = new Map()
  public data: object
  public expandedData: object

  /**
   * When the element loads, fetch the quads from the resource,
   * The resource may be an URL or a text containing the quads.
   */
  async connectedCallback () {
    const proxyUrl = this.getAttribute('proxy')
    this.proxy = proxyUrl ? new (<any> ActorHttpProxy).ProxyHandlerStatic(proxyUrl) : null;
    this.language = this.getAttribute('lang') ?? 'en'

    this.formElementRegistry = new FormElementRegistry(this)
    this.ontologyRepository = new OntologyRepository(this)

    this.formElementRegistry.register(String, Textarea, Subject, Reference)

    this.data = await attributeToJsonLd(this, 'data', true)
    this.jsonLdContext = this.data['@context']
    this.data = selectCorrectGraph(this.data, this.getAttribute('data'))
    this.expandedData = expandAll(this.data, this.jsonLdContext)
    delete this.data['@context']

    this.formJsonLd = await attributeToJsonLd(this, 'form');
    this.formDefinition = jsonLdToFormDefinition(this.formJsonLd, this.formElementRegistry);
    this.render()
  }

  render () {

    render(this, html`${Array.from(this.formDefinition.values())
      .map(formElement => formElement.templateWrapper())}`)
  }
}

customElements.define('rdf-form', RdfForm);
