/**
 * A custom element that shows a HTML form from a turtle file.
 */
import { ProxyHandlerStatic } from './vendor/ProxyHandlerStatic-browser.js'
import { Comunica } from './vendor/comunica-browser.js'
import { jsonld as JsonLdProcessor } from './vendor/jsonld.js';
import { render } from './vendor/uhtml.js';

import { FormElementRegistry } from './FormElementRegistry'
import {jsonLdToFormElements, resolveSubForms} from './jsonLdToFormElements'
import { String } from './FormElements/String'
import { Textarea } from './FormElements/Textarea'
import { Reference } from './FormElements/Reference'
import { Duration } from './FormElements/Duration'
import { Dropdown } from './FormElements/Dropdown'
import { Number } from './FormElements/Number'
import { Password } from './FormElements/Password'
import { Mail } from './FormElements/Mail'
import { Group } from './FormElements/Group'
import { Checkbox } from './FormElements/Checkbox'
import { Url } from './FormElements/Url'
import { UrlImage } from './FormElements/UrlImage'
import { Date } from './FormElements/Date'
import { Details } from './ContainerWidgets/Details'
import { Default } from './ContainerWidgets/Default'
import { Language, t } from './LanguageService'
import {attributeToJsonLd, lastPart, selectCorrectGraph} from './Helpers'
import {ContainerWidgetBase} from "./ContainerWidgets/ContainerWidgetBase";
import {FormElement} from "./Types";
import { html } from './vendor/uhtml.js'

export class RdfForm extends HTMLElement {

  public formElementRegistry: FormElementRegistry

  public jsonLdContext: object
  public proxy: any
  public language: string
  public html: any

  public formJsonLd: Object = {}
  public formInfo: Object = {}
  public formElements: Map<any, any> = new Map()
  public data: object
  public expandedData: object
  public shadow: any
  public comunica: any
  private fieldsByBinding: Map<string, FormElement> = new Map()
  private containerWidgetTypes: Map<string, any>
  private containers: Map<string, ContainerWidgetBase> = new Map()

  /**
   * When the element loads, fetch the quads from the resource,
   * The resource may be an URL or a text containing the quads.
   */
  async connectedCallback () {
    if (!this.comunica) { // Just a key of the second phase.
      this.formJsonLd = await resolveSubForms(await attributeToJsonLd(this, 'form'));
      // If this one is empty the attributes were not attached by uhtml. I think...
      if (this.formJsonLd) await this.init()
    }
  }

  async attributeChangedCallback() {
    await this.connectedCallback()
  }

  async init() {
    const proxyUrl = this.getAttribute('proxy')
    this.proxy = proxyUrl ? new ProxyHandlerStatic(proxyUrl) : null;

    const defaultLanguages = JSON.parse(this.getAttribute('languages')) ?? { 'en': 'English' }
    this.comunica = Comunica.newEngine()
    this.comunica.httpProxyHandler = this.proxy

    this.html = html
    Language.i10nLanguages = JSON.parse(this.getAttribute('i10n-languages')) ?? defaultLanguages
    Language.uiLanguages = JSON.parse(this.getAttribute('ui-languages')) ?? defaultLanguages
    await Language.setCurrent(this.getAttribute('selected-language') ?? 'en')

    this.formElementRegistry = new FormElementRegistry(() => this.render())
    this.formElementRegistry.register(String, Textarea, Reference, Dropdown, Duration, Number, Group, Password, Mail, Checkbox, Url, Date, UrlImage)

    this.containerWidgetTypes = new Map([
      ['details', Details],
      ['default', Default],
    ])

    if (window.RdfForm?.formElements) {
      this.formElementRegistry.register(...window.RdfForm?.formElements)
    }

    this.data = await attributeToJsonLd(this, 'data')
    this.jsonLdContext = this.data['@context']

    const contextText = this.getAttribute('context')

    if (contextText) {
      const context = JSON.parse(contextText)
      this.jsonLdContext = {...this.jsonLdContext, ...context}
    }

    this.data = selectCorrectGraph(this.data, this.getAttribute('data'))
    this.expandedData = this.data ? await JsonLdProcessor.expand(this.data): {}

    if (Array.isArray(this.expandedData)) this.expandedData = this.expandedData.pop()
    delete this.data['@context']

    this.jsonLdContext = {...this.jsonLdContext, ...this.formJsonLd['@context']}
    this.formElements = await jsonLdToFormElements(this, this.formJsonLd, this.formElementRegistry, this.expandedData, this.comunica);

    this.formInfo = this.formJsonLd['@graph'].find(item => item['@type'] === 'form:Form')

    this.removeAttribute('data')
    this.removeAttribute('form')
    this.removeAttribute('selected-language')
    this.removeAttribute('i10n-languages')
    this.removeAttribute('ui-languages')
    this.removeAttribute('proxy')

    this.shadow = this.attachShadow({ mode: 'open' })

    // TODO Maybe these should be formElements, but maybe not.. I don't know for sure.
    // I have chosen the shortest route for now.
    for (const formElement of this.formElements.values()) {
      const containerName = formElement.Field.container.toString() ? formElement.Field.container.toString() : 'default'
      const containerDefinition = this.formJsonLd['@graph'].find(item => item['@type'] === 'form:Container' && lastPart(item['@id']) === containerName)
      const containerWidgetClass = this.containerWidgetTypes.get(containerDefinition?.['form:containerWidget'] ?? 'default')
      const container = this.containers.get(containerName) ?? new containerWidgetClass(containerDefinition)
      container.addFormElement(formElement)
      this.fieldsByBinding.set(formElement.Field.binding.toString(), formElement)
      formElement.addEventListener('change', event => {
        this.dispatchEvent(new CustomEvent('fieldChange', {
          detail: formElement
        }))
      })
      if (!this.containers.get(containerName)) this.containers.set(containerName, container)
    }

    this.render()

    this.dispatchEvent(new CustomEvent('load'))
  }

  async render () {
    // TODO make configurable
    const regions = ['main', 'sidebar']

    try {
      render(this.shadow, this.html`
      <style>.svg-inline--fa { display: none; }</style>
      <link rel="stylesheet" href="/css/rdf-form.css" />

      <div class="actions top">
        ${await this.languageSwitcher()}
      </div>

      <form autocomplete="off" onsubmit="${event => { event.preventDefault(); this.serialize() }}">

      ${await Promise.all(regions.map(async region => this.html.for(this, 'region' + region)`
        <div class="${'region ' + region}" style="${'grid-area: ' + region}">
          ${await Promise.all([...this.containers.values()]
            .filter(container => {
              return (container.definition?.['form:region'] ?? 'main') === region
            })
            .sort((a, b) => {
              const aOrder = a.definition?.['form:order'] ?? 0
              const bOrder = b.definition?.['form:order'] ?? 0
              return aOrder - bOrder
            })
            .map(async (container) => await container.render()))}

          ${region === 'main' ? this.html`
            <div class="actions bottom">
              ${await this.actions()}
            </div>
          ` : ''}
        </div>
      `))}

      </form>
    `)
    }
    catch (e) {
      console.error(e)
    }
  }

  async languageSwitcher () {
    return Object.keys(Language.uiLanguages).length > 1 ? this.html`
      <div class="language-selector-wrapper">
        <label class="label">${t`Interface language`}</label>

        <div class="language-selector-inner">
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
    return this.html`<button class="button save">${t.direct('Save')}</button>`
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

    if (this.formInfo?.['form:binding']?.['@id']) {
      jsonLd['@type'] = [this.formInfo['form:binding']['@id']]
    }

    const compacted = await JsonLdProcessor.compact(jsonLd, jsonLd['@context']);

    this.dispatchEvent(new CustomEvent('save', {
      detail: compacted
    }))
  }

  getFieldByPredicate (predicate) {
    return this.fieldsByBinding.get(predicate)
  }
}

customElements.define('rdf-form', RdfForm);
