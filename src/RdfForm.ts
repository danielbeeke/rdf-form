/**
 * A custom element that shows a HTML form from a turtle file.
 */
import { ProxyHandlerStatic } from './vendor/ProxyHandlerStatic-browser.js'
import { Comunica } from './vendor/comunica-browser.js'
import { jsonld as JsonLdProcessor } from './vendor/jsonld.js';
import { render } from './vendor/uhtml.js';

import { FormElementRegistry } from './FormElementRegistry'
import { jsonLdToFormElements } from './jsonLdToFormElements'
import { String } from './FormElements/String'
import { Textarea } from './FormElements/Textarea'
import { Reference } from './FormElements/Reference'
import { Duration } from './FormElements/Duration'
import { Dropdown } from './FormElements/Dropdown'
import { Number } from './FormElements/Number'
import { Group } from './FormElements/Group'
import { Classy } from './Classy'
import { Language, t } from './LanguageService'
import { attributeToJsonLd, selectCorrectGraph } from './Helpers'

export class RdfForm extends HTMLElement {

  public formElementRegistry: FormElementRegistry

  public jsonLdContext: object
  public proxy: any
  public language: string
  public html: any

  public formJsonLd: Object = {}
  public formElements: Map<any, any> = new Map()
  public data: object
  public expandedData: object
  public shadow: any
  public comunica: any

  /**
   * When the element loads, fetch the quads from the resource,
   * The resource may be an URL or a text containing the quads.
   */
  async connectedCallback () {
    const proxyUrl = this.getAttribute('proxy')
    this.proxy = proxyUrl ? new ProxyHandlerStatic(proxyUrl) : null;

    const defaultLanguages = JSON.parse(this.getAttribute('languages')) ?? { 'en': 'English' }
    this.comunica = Comunica.newEngine()
    this.comunica.httpProxyHandler = this.proxy
    this.html = Classy
    Language.i10nLanguages = JSON.parse(this.getAttribute('i10n-languages')) ?? defaultLanguages
    Language.uiLanguages = JSON.parse(this.getAttribute('ui-languages')) ?? defaultLanguages
    await Language.setCurrent(this.getAttribute('selected-language') ?? 'en')

    this.formElementRegistry = new FormElementRegistry(() => this.render())
    this.formElementRegistry.register(String, Textarea, Reference, Dropdown, Duration, Number, Group)

    this.data = await attributeToJsonLd(this, 'data')
    this.jsonLdContext = this.data['@context']
    this.data = selectCorrectGraph(this.data, this.getAttribute('data'))
    this.expandedData = this.data ? await JsonLdProcessor.expand(this.data): {}

    if (Array.isArray(this.expandedData)) this.expandedData = this.expandedData.pop()
    delete this.data['@context']

    this.formJsonLd = await attributeToJsonLd(this, 'form');
    this.jsonLdContext = {...this.jsonLdContext, ...this.formJsonLd['@context']}
    this.formElements = await jsonLdToFormElements(this, this.formJsonLd, this.formElementRegistry, this.expandedData, this.comunica);

    this.removeAttribute('data')
    this.removeAttribute('form')
    this.removeAttribute('selected-language')
    this.removeAttribute('i10n-languages')
    this.removeAttribute('ui-languages')
    this.removeAttribute('proxy')

    this.shadow = this.attachShadow({ mode: 'open' })
    this.render()
  }

  async render () {
    try {
      render(this.shadow, this.html`
      <link rel="stylesheet" href="/css/rdf-form.css" />

      <div class="actions top">
        ${await this.languageSwitcher()}
      </div>

      <form onsubmit="${event => { event.preventDefault(); this.serialize() }}">

      ${await Promise.all(Array.from(this.formElements.values())
        .map(async (formElement) => await formElement.templateWrapper())
      )}

      <div class="actions bottom">
        ${await this.actions()}
      </div>

      </form>
    `)
    }
    catch (e) {
      console.error(e)
    }
  }

  async languageSwitcher () {
    return Object.keys(Language.uiLanguages).length > 1 ? this.html`
      <div classy:language-selector-wrapper="language-selector-wrapper">
        <label classy:label="label">${t`Interface language`}</label>

        <div classy:language-selector-inner="language-selector-inner">
          <select onchange="${async event => {
            await Language.setCurrent(event.target.value)
            this.dispatchEvent(new CustomEvent('language-change'))
            await this.render()
          }}" class="language-switcher">
              ${Object.entries(Language.uiLanguages).map((language) => {
            const code = language[0]
            const label = language[1]
            return this.html`<option value="${code}" selected="${code === Language.current ? true : null}">${label}</option>`
          })}
          </select>
        </div>
      </div>
    ` : ''
  }

  async actions () {
    return this.html`<button classy:save-button="button save">${t.direct('Save')}</button>`
  }

  async serialize () {
    const jsonLd = {
      '@context': {...this.jsonLdContext}
    }
    const formElements = Array.from(this.formElements.values())
    for (const formElement of formElements) {
      const binding = formElement.Field.binding
      jsonLd[binding] = formElement.serialize()
    }

    const compacted = await JsonLdProcessor.compact(jsonLd, jsonLd['@context']);
    this.dispatchEvent(new CustomEvent('save', {
      detail: compacted
    }))
  }
}

customElements.define('rdf-form', RdfForm);
