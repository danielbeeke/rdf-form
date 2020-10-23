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
import { Classy } from './Classy'

import { I14n } from './i14n'

import {attributeToJsonLd, selectCorrectGraph} from './Helpers'
import { render, html } from 'uhtml'
import style from '../scss/style.scss'

export class RdfForm extends HTMLElement {

  public ontologyRepository: OntologyRepository
  public formElementRegistry: FormElementRegistry

  public jsonLdContext: object
  public proxy: string
  public i14nLanguages: object
  public uiLanguages: object
  public language: string
  public t: any

  public formJsonLd: Object = {}
  public formDefinition: Map<any, any> = new Map()
  public data: object
  public expandedData: object
  public shadow: any

  /**
   * When the element loads, fetch the quads from the resource,
   * The resource may be an URL or a text containing the quads.
   */
  async connectedCallback () {
    const proxyUrl = this.getAttribute('proxy')
    this.proxy = proxyUrl ? new (<any> ActorHttpProxy).ProxyHandlerStatic(proxyUrl) : null;
    const defaultLanguages = JSON.parse(this.getAttribute('languages')) ?? { 'en': 'English' }
    this.i14nLanguages = JSON.parse(this.getAttribute('i14n-languages')) ?? defaultLanguages
    this.uiLanguages = JSON.parse(this.getAttribute('ui-languages')) ?? defaultLanguages

    this.language = this.getAttribute('selected-language') ?? 'en'
    this.t = await I14n(this.language, Object.keys(this.i14nLanguages))

    this.formElementRegistry = new FormElementRegistry(this)
    this.ontologyRepository = new OntologyRepository(this)

    this.formElementRegistry.register(String, Textarea, Subject, Reference)

    this.data = await attributeToJsonLd(this, 'data')
    this.jsonLdContext = this.data['@context']
    this.data = selectCorrectGraph(this.data, this.getAttribute('data'))
    this.expandedData = expandAll(this.data, this.jsonLdContext)
    delete this.data['@context']

    this.formJsonLd = await attributeToJsonLd(this, 'form');
    this.formDefinition = await jsonLdToFormDefinition(this.formJsonLd, this.formElementRegistry);

    const promises = Array.from(this.formDefinition.values()).map(formElement => formElement.init())
    this.removeAttribute('data')
    this.removeAttribute('form')
    this.removeAttribute('selected-language')
    this.removeAttribute('i14n-languages')
    this.removeAttribute('ui-languages')
    this.removeAttribute('proxy')

    this.shadow = this.attachShadow({ mode: 'open' })

    Promise.all(promises).then(() => {
      this.render()
    })
  }

  async render () {
    render(this.shadow, Classy`
      <style>
        ${style}
      </style>

      <div class="actions top">
        ${await this.languageSwitcher()}
      </div>

      ${await Promise.all(Array.from(this.formDefinition.values()).map(async (formElement) => await formElement.templateWrapper()))}

      <div class="actions bottom">
        ${await this.actions()}
      </div>
    `)
  }

  async languageSwitcher () {
    return Object.keys(this.uiLanguages).length > 1 ? html`
      <select onchange="${async event => {
        this.language = event.target.value;
        this.dispatchEvent(new CustomEvent('language-change'))
        this.t = await I14n(this.language, Object.keys(this.i14nLanguages))
        this.render()
      }}" class="language-switcher">
        ${Object.entries(this.uiLanguages).map((language) => {
          const code = language[0]
          const label = language[1]
          return code === this.language ? html`
            <option value="${code}" selected>${label}</option>
            ` : html`
            <option value="${code}">${label}</option>
          `
        })}
      </select>
    ` : ''
  }

  async actions () {
    return html`<button class="button">${this.t.direct('Save')}</button>`
  }
}

customElements.define('rdf-form', RdfForm);
