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
 * We do not support JSON-ld types: @see https://github.com/w3c/json-ld-syntax/issues/13
 *
 */
import { ProxyHandlerStatic } from './vendor/ProxyHandlerStatic-browser.js'
import { Comunica } from './vendor/comunica-browser.js'
import { jsonld as JsonLdProcessor } from './vendor/jsonld.js';
import { render, html } from './vendor/uhtml.js';

import { FormElementRegistry } from './FormElementRegistry'
import {jsonLdToFormElements, resolveSubForms} from './jsonLdToFormElements'
import { SlimSelect } from "./vendor/slimselect.js";

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
import {attributeToJsonLd, debounce, lastPart, selectCorrectGraph} from './Helpers'
import {ContainerWidgetBase} from "./ContainerWidgets/ContainerWidgetBase";
import {FormElement} from "./Types";
import {ensureLanguages, languages, langCodesToObject, filterLanguages} from './getLanguageLabel'

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
  private languageSelectElement: HTMLSelectElement = null
  private cssLoaded = false
  private hideLanguageControl = false
  private isSaving = false

  async attributeChangedCallback(name, oldValue, newValue) {
    await this.connectedCallback()
  }

  async connectedCallback () {
    if (!this.initiated) {
      this.initiated = true
      await this.init()
    }
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

    this.hideLanguageControl = this.getAttribute('hide-language-control') !== null

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
    if (Array.isArray(this.expandedData)) this.expandedData = this.expandedData.pop()

    // Language initialisation.
    await ensureLanguages()
    const usedLanguages = await Language.extractUsedLanguages(this.expandedData)
    const defaultLanguages = JSON.parse(this.getAttribute('languages')) ?? (
      usedLanguages.length ? await langCodesToObject(usedLanguages) : {}
    )

    Language.l10nLanguages = JSON.parse(this.getAttribute('l10n-languages')) ?? Object.assign({}, defaultLanguages)

    if (this.getAttribute('selected-l10n-language') && this.getAttribute('selected-l10n-language') in Language.l10nLanguages) {
      Language.currentL10nLanguage = this.getAttribute('selected-l10n-language')
    }

    Language.uiLanguages = JSON.parse(this.getAttribute('ui-languages')) ?? {}
    await Language.setCurrent(this.getAttribute('selected-language') ?? 'en')

    // The form may have subForms fields, a subForm field has a URL reference to another form definition. The subForm field is replaced with all the fields of the subform definition.
    // It is possible to override some field properties from the subForm definition with the subform field definition, such as order.
    this.formElements = await jsonLdToFormElements(this, this.formJsonLd, this.formElementRegistry, this.expandedData, this.comunica);

    // A form may have some information such as the RDF class it will save to.
    this.formInfo = this.formJsonLd['@graph'].find(item => item['@type'] === 'form:Form')
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
    const regions = ['top', 'main', 'sidebar']

    try {
      const languageClick = (langCode) => {
        Language.currentL10nLanguage = langCode
        this.render()
      }

      const languageTabs = Object.keys(Language.l10nLanguages).length > 1 ? html`<div class="language-tabs">
      ${Object.entries(Language.l10nLanguages).map(([langCode, language]) => this.html`
        <button lang="${langCode}" class="${'language-tab ' + (langCode === Language.currentL10nLanguage ? 'active' : '')}" type="button" onclick="${() => languageClick(langCode)}">${Language.l10nLanguages?.[langCode] ?? language}</button>
      `)}
      </div>` : ''

      const languageWrappers = [
        await this.languageSwitcher(),
        await this.languageControl()
      ].filter(thing => thing)

      const languageContainer = languageWrappers.length ? this.html`
        <details open class="container language-settings">
          <summary>
            <h4>${t`Language settings`}</h4>
          </summary>
          ${languageWrappers}
        </details>
      ` : ''

      render(this.shadow, this.html`
      ${!this.cssLoaded ? this.html`<style>* { display: none; }</style>` : ''}
      <link onload="${() => {
        this.cssLoaded = true
        this.render()
      }}" rel="stylesheet" href="/css/rdf-form.css" />

      <form autocomplete="off" onsubmit="${event => { event.preventDefault(); this.serialize() }}">

      ${await Promise.all(regions.map(async region => this.html`
        <div class="${'region ' + region}" style="${'grid-area: ' + region}">
          ${region === 'sidebar' ? languageContainer : ''}
          ${region === 'top' ? languageTabs : ''}

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
    ` : null
  }

  /**
   * Content may have multiple languages.
   * If so we need to be able to add a new language.
   * For now I have used https://r12a.github.io/app-subtags so that I do not have to update it.
   * TODO this should be fetched locally on the developers machine instead of in the browser.
   *
   * TODO Make it possible to have a fixed list of languages.
   * Something like allow-l10n-add could be used to show the language control.
   */
  async languageControl () {
    if (this.hideLanguageControl) return null

    const onChange = async (event) => {
      const selectedLanguages = event.currentTarget.slim.selected()
      Language.l10nLanguages = await langCodesToObject(selectedLanguages)
      await this.render()
    }

    const select = this.languageSelectElement ?? document.createElement('select')

    if (!this.languageSelectElement) {
      this.languageSelectElement = select
      select.multiple = true
      select.addEventListener('change', onChange)

      const initialLanguages = [...Object.entries(Language.l10nLanguages)]

      setTimeout(async () => {
        const slimSelect = new SlimSelect({
          select: select,
          ajax: async function (search, callback) {
            const languages = await filterLanguages(search)
            const options = languages.map(language => {
              return {
                text: Language.l10nLanguages?.[language.subtag] ?? language.description,
                value: language.subtag,
              }
            })

            callback(options)
          }
        })

        const selection = initialLanguages.map(([langCode, language]) => {
          return {
            text: Language.l10nLanguages[langCode] ?? language,
            value: langCode,
            mandatory: true // TODO think about how one should remove a language from an object.
          }
        })

        slimSelect.setData(selection)
        slimSelect.set(selection.map(option => option.value))
      })
    }

    return this.html`
      <div class="language-control-wrapper form-element">
        <label class="label">${t`Content languages`}</label>
        <div class="inner"><div class="items"><div class="item">${select}</div></div></div>
      </div>
    `
  }

  async actions () {
    return this.html`<button class="${'button save ' + (this.isSaving ? 'is-working' : '') }">${t.direct('Save')}</button>`
  }

  /**
   * Serialized all the form fields back to JSON-ld so it can be saved to the backend of the application developer.
   */
  async serialize () {
    this.isSaving = true
    this.render()

    const clonedData = JSON.parse(JSON.stringify(this.data))

    const jsonLd = Object.assign({ '@context': {...this.jsonLdContext} }, clonedData)
    const formElements = Array.from(this.formElements.values())
    for (const formElement of formElements) {
      const binding = formElement.Field.binding
      jsonLd[binding] = await formElement.serialize()
    }

    // Sets the target RDF classes
    if (this.formInfo?.['form:binding'] && !jsonLd['@type']) {
      jsonLd['@type'] = Array.isArray(this.formInfo['form:binding']) ? this.formInfo['form:binding'].map(value => value['@id']) : this.formInfo['form:binding']['@id']
    }

    const compacted = await JsonLdProcessor.compact(jsonLd, jsonLd['@context']);
    this.dispatchEvent(new CustomEvent('save', { detail: compacted }))
    this.isSaving = false
    this.render()
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
