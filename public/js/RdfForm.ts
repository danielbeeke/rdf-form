/**
 * A custom element that shows a HTML form from a turtle file.
 * This form can be used to lad existing data. The saving to the database should be done by the developer.
 *
 * The bigger picture is that you are having objects that are shared over multiple applications with the same form.
 *
 * With this library the framework specific form code can be replaced with a universal form UI (RDF form).
 *
 * It is possible to register your own form elements. To do that, create a class and extend FormElementBase and call:
 * window.RdfForm.formElements.push(YourClass)
 * Before loading RdfForm.
 *
 */
import { ProxyHandlerStatic } from './vendor/ProxyHandlerStatic-browser.js'
import { Comunica } from './vendor/comunica-browser.js'
import { jsonld as JsonLdProcessor } from './vendor/jsonld.js';
import { render, html } from './vendor/uhtml.js';

import { FormElementRegistry } from './FormElementRegistry'
import {jsonLdToFormElements, resolveSubForms} from './jsonLdToFormElements'

// Default formElements.
import { String } from './FormElements/String'
import { Textarea } from './FormElements/Textarea'
import { WYSIWYG } from './FormElements/WYSIWYG'
import { Reference } from './FormElements/Reference'
import { Duration } from './FormElements/Duration'
import { Dropdown } from './FormElements/Dropdown'
import { Number } from './FormElements/Number'
import { Password } from './FormElements/Password'
import { Mail } from './FormElements/Mail'
import { Group } from './FormElements/Group'
import { Checkbox } from './FormElements/Checkbox'
import { Url } from './FormElements/Url'
import { Color } from './FormElements/Color'
import { UrlImage } from './FormElements/UrlImage'
import { Date } from './FormElements/Date'

// Default container widgets.
import { Details } from './ContainerWidgets/Details'
import { Default } from './ContainerWidgets/Default'

import { Language, t } from './LanguageService'
import {attributeToJsonLd, lastPart, selectCorrectGraph} from './Helpers'
import {ContainerWidgetBase} from "./ContainerWidgets/ContainerWidgetBase";
import {FormElement} from "./Types";
import './CustomElements/SlimSelect'
import {filterLanguages, getLanguageLabel, langCodesToObject} from './getLanguageLabel'

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
  private initiated = false

  async attributeChangedCallback() {
    if (!this.initiated) await this.init()
  }

  async connectedCallback () {
    if (!this.initiated) await this.init()
  }

  /**
   * Loads form definition and the data, initiates the language system and renders the form
   */
  async init () {
    // The 'form' attribute is needed for the form to work,
    // Some render libraries may add the attributes after attaching the element to the DOM.
    // That results in an unusable state.
    // We fix it by calling init() when changing attributes.
    if (!this.getAttribute('form')) return
    this.initiated = true

    this.formJsonLd = await resolveSubForms(await attributeToJsonLd(this, 'form'));

    // This form library is heavily dependant on CORS requests. Some websites may have been closed off.
    // For this we use a CORS proxy. @see https://developer.mozilla.org/nl/docs/Web/HTTP/CORS
    const proxyUrl = this.getAttribute('proxy')
    this.proxy = proxyUrl ? new ProxyHandlerStatic(proxyUrl) : null;

    // The RDF query engine we are using @see https://comunica.dev/
    // We are re-using this objects so it may cache,
    // comunica.httpProxyHandler is non standard, we are just putting it there so we can pick it up again when querying with Comunica.
    this.comunica = Comunica.newEngine()
    this.comunica.httpProxyHandler = this.proxy

    // The template engine we are using.
    // @see https://github.com/WebReflection/uhtml
    // It is worth reading through their documentation.
    this.html = html

    this.formElementRegistry = new FormElementRegistry(() => this.render())

    // The default formElements.
    this.formElementRegistry.register(String, Textarea, Reference, Dropdown, Duration, Number, Group, Password, Mail, Checkbox, Url, Date, UrlImage, WYSIWYG, Color)

    // Loads third party formElements.
    if (window.RdfForm?.formElements) this.formElementRegistry.register(...window.RdfForm?.formElements)

    // TODO These container widget types maybe should be pluggable.
    this.containerWidgetTypes = new Map([
      ['details', Details],
      ['default', Default],
    ])

    this.data = await attributeToJsonLd(this, 'data')
    this.jsonLdContext = this.data['@context']
    delete this.data['@context']

    // The application may have needs for adding aliases to the JSON-ld context.
    const contextText = this.getAttribute('context')
    if (contextText) {
      try {
        this.jsonLdContext = {...this.jsonLdContext, ...JSON.parse(contextText)}
      }
      catch (e) {
        console.error(`Could not merge the provided JSON-ld context`)
      }
    }

    // Append the form JSON-ld context to the context.
    this.jsonLdContext = {...this.jsonLdContext, ...this.formJsonLd['@context']}

    this.data = selectCorrectGraph(this.data, this.getAttribute('data'))

    // Within the application we use the expanded JSON-ld data. @see https://www.youtube.com/watch?v=Tm3fD89dqRE
    // For the form definition we use the collapsed predicates. THis so we can easily use the namespace 'form' without caring where the form definition comes from.
    // That enables detaching from the form definition.
    // It makes it possible for an application developer to completely detach from any hosted code of RDF form
    // and ship the form definition ontology files themselves.
    this.expandedData = this.data ? await JsonLdProcessor.expand(this.data): {}

    // Language initialisation.
    if (Array.isArray(this.expandedData)) this.expandedData = this.expandedData.pop()
    const usedLanguages = await Language.extractUsedLanguages(this.expandedData)
    const defaultLanguages = JSON.parse(this.getAttribute('languages')) ?? (
      usedLanguages.length ? await langCodesToObject(usedLanguages) : { 'en': 'English' }
    )
    Language.l10nLanguages = JSON.parse(this.getAttribute('l10n-languages')) ?? defaultLanguages
    Language.uiLanguages = JSON.parse(this.getAttribute('ui-languages')) ?? defaultLanguages
    await Language.setCurrent(this.getAttribute('selected-language') ?? 'en')

    // The form may have subForms fields, a subForm field has a URL reference to another form definition. The subForm field is replaced with all the fields of the subform definition.
    // It is possible to override some field properties from the subForm definition with the subform field definition, such as order.
    this.formElements = await jsonLdToFormElements(this, this.formJsonLd, this.formElementRegistry, this.expandedData, this.comunica);

    // A form may have some information such as the RDF class it will save to.
    this.formInfo = this.formJsonLd['@graph'].find(item => item['@type'] === 'form:Form')

    // Cleaning up attributes, this is not really needed, I thought the attributes make the DOM inspector a mess.
    this.removeAttribute('data')
    this.removeAttribute('form')
    this.removeAttribute('selected-language')
    this.removeAttribute('l10n-languages')
    this.removeAttribute('ui-languages')
    this.removeAttribute('proxy')

    this.shadow = this.attachShadow({ mode: 'open' })

    this.nestContainers()
    await this.render()
    this.dispatchEvent(new CustomEvent('load'))
  }

  /**
   * Puts all the formElements inside a container
   * TODO Maybe these containerWidgets should be formElements, but maybe not.. I don't know for sure.
   * I have chosen the shortest route for now.
   */
  nestContainers () {
    for (const formElement of this.formElements.values()) {
      const containerName = formElement.Field.container.toString() ? formElement.Field.container.toString() : 'default'
      const containerDefinition = this.formJsonLd['@graph'].find(item => item['@type'] === 'form:Container' && lastPart(item['@id']) === containerName)
      const containerWidgetClass = this.containerWidgetTypes.get(containerDefinition?.['form:containerWidget'] ?? 'default')
      const container = this.containers.get(containerName) ?? new containerWidgetClass(containerDefinition)
      if (!this.containers.get(containerName)) this.containers.set(containerName, container)
      container.addFormElement(formElement)
      this.fieldsByBinding.set(formElement.Field.binding.toString(), formElement)

      // Here we dispatch events of all the formElements on the form itself.
      // This makes it possible for application developers to hook onto changes of the form.
      // For now I have not added the original event because developers should use the JSON-ld value (the abstraction) instead of text values.
      formElement.addEventListener('change', event => {
        this.dispatchEvent(new CustomEvent('fieldChange', { detail: formElement }))
      })
    }
  }

  /**
   * Renders the form; the fields, containers and regions.
   */
  async render () {
    // Used for race condition when calling form.render() within the constructor of a baseElement.
    // It happened to me a couple of times while creating third party formElements.
    if (!this.shadow) { return }

    // For now there are two regions. A region may hold containers. It is only used for visual purposes.
    // TODO I think the layout should be configurable somewhere in the future.
    const regions = ['main', 'sidebar']

    try {
      const languageContainer = this.html`
        <details open class="container language-settings">
          <summary>
            <h4>${t`Language settings`}</h4>
          </summary>
          ${await this.languageSwitcher()}
          ${await this.languageControl()}
        </details>
      `

      render(this.shadow, this.html`
      <style>.svg-inline--fa { display: none; }</style>
      <link rel="stylesheet" href="/css/rdf-form.css" />

      <form autocomplete="off" onsubmit="${event => { event.preventDefault(); this.serialize() }}">

      ${await Promise.all(regions.map(async region => this.html`
        <div class="${'region ' + region}" style="${'grid-area: ' + region}">
          ${region === 'sidebar' ? languageContainer : ''}

          ${await Promise.all([...this.containers.values()]
            .filter(container => {
              return (container.definition?.['form:region'] ?? 'main') === region
            })

            // TODO move the sorting so it will be cached.
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

  /**
   * A form may have multiple interface languages.
   * If so, create a language selector.
   */
  async languageSwitcher () {
    return Object.keys(Language.uiLanguages).length > 1 ? this.html`
      <div class="language-selector-wrapper form-element">
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

  /**
   * Content may have multiple languages.
   * If so we need to be able to add a new language.
   * For now I have used https://r12a.github.io/app-subtags so that I do not have to update it.
   * TODO this should be fetched locally on the developers machine instead of in the browser.
   */
  async languageControl () {
    const onchange = async (event) => {
      const selectedLanguages = event.currentTarget.slim.selected()
      Language.l10nLanguages = await langCodesToObject(selectedLanguages)
      await this.render()
    }

    const onAdd = async (event) => {
      const value = event.detail
      const text = await getLanguageLabel(value)
      return { text, value }
    }

    const ajax = async (event) => {
      const { callback, search } = event.detail
      const filteredLanguages = await filterLanguages(search)
      const items = filteredLanguages.map(language => {
        return {
          text: language.description,
          value: language.subtag
        }
      })

      if (!items.length) return callback(t.direct(`Nothing found`))

      return callback(items)
    }

    return this.html`
      <div class="language-control-wrapper form-element">
        <label class="label">${t`Content languages`}</label>

        <div class="inner">
          <select
            multiple
            is="slim-select"
            selected="${JSON.stringify(Language.l10nLanguages)}"
            onadd="${onAdd}"
            allow-add
            onchange="${onchange}"
            ajaxsearch
            onajaxsearch="${ajax}">
          </select>
        </div>

      </div>
    `
  }

  async actions () {
    return this.html`<button class="button save">${t.direct('Save')}</button>`
  }

  /**
   * Serialized all the form fields back to JSON-ld so it can be saved to the backend of the application developer.
   */
  async serialize () {
    const jsonLd = { '@context': {...this.jsonLdContext} }
    const formElements = Array.from(this.formElements.values())
    for (const formElement of formElements) {
      const binding = formElement.Field.binding
      jsonLd[binding] = formElement.serialize()
    }

    // Sets the target RDF class
    // TODO maybe these should be allowed to be multiple classes.
    if (this.formInfo?.['form:binding']?.['@id']) {
      jsonLd['@type'] = [this.formInfo['form:binding']['@id']]
    }

    const compacted = await JsonLdProcessor.compact(jsonLd, jsonLd['@context']);

    this.dispatchEvent(new CustomEvent('save', { detail: compacted }))
  }

  /**
   * Public API
   * With this an application developer can do:
   * const textField = form.getFieldByPredicate('schema:text')
   * @param predicate
   */
  public getFieldByPredicate (predicate) {
    return this.fieldsByBinding.get(predicate)
  }
}

customElements.define('rdf-form', RdfForm);
