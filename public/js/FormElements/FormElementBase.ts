/**
 * This is the base class for every form element.
 * You can extend this class and overwrite the template methods that you want to change.
 * It is possible to use the formElements without RDF form,
 * However you still should use FieldDefinitions and FieldValues.
 */

import { faTimes, faCog } from '../vendor/free-solid-svg-icons.js'
import { fa } from '../helpers/fa'
import { FieldDefinition, FormElement } from '../Types'
import {lastPart} from "../helpers/lastPart";
import { debounce } from '../helpers/debounce'
import { ttl2jsonld } from '../vendor/ttl2jsonld.js'
import { FieldValues } from '../FieldValues'
import { t, Language} from '../LanguageService'
import { html } from '../vendor/uhtml.js'
import { jsonld as JsonLdProcessor } from '../vendor/jsonld.js';

if (!window.RdfForm) { window.RdfForm = { formElements: [] } }

export class FormElementBase extends EventTarget {

  static type: string = 'base'

  public expanded = new Map()
  public values: Array<any> = []
  public Values: FieldValues
  public Field: FieldDefinition
  public children: Map<string, FormElement> = new Map()
  public html: any
  public parent: any
  public searchSuggestions: Map<string | number, Array<any>> = new Map()
  public metas = new Map()
  public render: any
  public isLoading = new Map()
  public jsonLdValueType: string = 'value'
  public comunica
  public t: any

  private menuIsOpen: boolean = false
  private pathContext = {
    "schema": "http://schema.org/",
    "dbo": "http://dbpedia.org/ontology/",
    "dbp": "http://dbpedia.org/property/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
  }

  constructor (
      field: FieldDefinition,
      values: FieldValues,
      children: Map<string, FormElement>,
      jsonLdContext = {},
      comunica,
      renderCallback: any,
    ) {
    super()
    this.html = html
    this.comunica = comunica
    this.children = children
    for (const child of children.values()) child.parent = this

    this.Field = field
    if (this.Field.jsonLdKey) this.jsonLdValueType = this.Field.jsonLdKey
    this.pathContext['@language'] = Language.current
    this.pathContext = {...this.pathContext, ...jsonLdContext}
    this.Values = values
    this.t = t

    if (renderCallback) {
      this.render = debounce(() => {
        renderCallback()
      }, 100)
    }
  }

  async init () {
    this.Values.jsonLdValueType = this.jsonLdValueType
  }

  /************************************************************************
   * Getters and setters.
   ************************************************************************/

  getType () {
    /** @ts-ignore */
    return this.constructor.type.toLowerCase()
  }

  shouldShowExpanded (index) {
     return this.expanded.get(index) ||
      !this.Values.get(index) ||
      this.isLoading.get(index)
  }

  isRequired (index) {
    return index === 0 && this.Field.required ? true : null
  }

  isRemovable (index) {
    return index !== 0 && !(this.Field.required && this.Values.length < 2)
  }

  createButton (buttonClass, method, label) {
    return this.html`<button type="button" class="${'button ' + buttonClass}" onclick="${() => {
      method()
      this.render()
    }}">${typeof label === 'object' ? label : t.direct(label)}</button>`
  }

  getMenuButtons () {
    const buttons = []

    if (this.Field.translatable && !this.Values.hasTranslations && Object.keys(Language.l10nLanguages).length) {
      buttons.push(this.createButton('add', () => this.Values.enableTranslations(), 'Create translation'))
    }

    if (this.Field.translatable && this.Values.hasTranslations) {
      buttons.push(this.createButton('remove', () => this.Values.removeTranslations(), 'Remove translations'))
    }

    return buttons
  }

  /*****************************************************************************************************************
   * Mutators, most of them are inside FieldValues, these are here because they do more then only mutate a value.
   *****************************************************************************************************************/

  async selectSuggestion (suggestionUrl, index) {
    this.searchSuggestions.set(index, [])
    this.Values.setValue(suggestionUrl, index)
    this.expanded.set(index, false)
    await this.updateMetas()
  }

  async selectValue (value, index) {
    this.Values.set(value, index)
    this.expanded.set(index, false)
    this.searchSuggestions.set(index, [])
  }

  on (event, index) {
    if (['keyup', 'change'].includes(event.type)) {
      this.Values.setValue(event?.target?.value, index)
      if (index === null) this.render()
    }

    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }

  async updateMetas () {
    for (const value of this.Values.getAllFromBinding()) {
      const uri = value?.['@id']

      if (uri && !this.metas.get(uri)) {
        const proxyUrl = this.comunica?.httpProxyHandler?.prefixUrl
        const response = await fetch(`${proxyUrl ? proxyUrl : ''}${uri}`, {
          headers: {
            'Accept': 'application/ld+json'
          }
        })
        const text = await response.text()
        let json
        try { json = JSON.parse(text) }
        catch (e) {
          // @ts-ignore
          json = ttl2jsonld(text)
        }

        json = await JsonLdProcessor.expand(json)
        if (Array.isArray(json)) json = json[0]

        const meta = {
          label: null,
          thumbnail: null,
        }

        const labelLastParts = ['name', 'username', 'label']
        const imageLastParts = ['thumbnail', 'depiction', 'image', 'img']

        for (const [predicate, value] of Object.entries(json)) {
          if (!meta.label && labelLastParts.includes(lastPart(predicate))) {
            const valueInPreferredLanguage = (value as Array<any>).find(item => item['@language'] === Language.current)
            const valueInUndeterminedLanguage = (value as Array<any>).find(item => item['@language'] === 'und')
            meta.label = valueInPreferredLanguage?.['@value'] ?? valueInUndeterminedLanguage?.['@value'] ?? value?.[0]?.['@value']
          }

          if (meta.label?.substr(0, 2) === '_:') meta.label = false

          if (!meta.thumbnail && imageLastParts.includes(lastPart(predicate))) {
            const valueInPreferredLanguage = (value as Array<any>).find(item => item['@language'] === Language.current)
            const valueInUndeterminedLanguage = (value as Array<any>).find(item => item['@language'] === 'und')
            meta.thumbnail = valueInPreferredLanguage?.['@value'] ?? valueInPreferredLanguage?.['@id'] ?? 
            valueInUndeterminedLanguage?.['@value'] ?? valueInUndeterminedLanguage?.['@id'] ?? 
            value?.[0]?.['@value'] ?? value?.[0]?.['@id']

            if (meta.thumbnail?.substr(0, 2) === '_:') meta.thumbnail = false
          }
        }

        if (!meta.label) meta.label = false
        if (!meta.thumbnail) meta.thumbnail = false

        this.metas.set(uri, meta)
      }
    }
  }

  /************************************************************************
   * Templates.
   *
   * These are small parts of the whole field.
   * Extending classes may override one or more of them.
   ************************************************************************/

  async templateLabel () {

    const languageCount = Object.keys(Language.l10nLanguages).length
    const languageLabel = this.Values.hasTranslations ? Language.l10nLanguages[Language.currentL10nLanguage] : (languageCount ? t.direct('Language independent') : null)

    return this.Field.label ? this.html`
    <label class="label">
      ${this.Field.label}
      ${this.Field.required ? this.html`<span class="label-required-star">*</span>` : ''}
      ${languageLabel ? this.html`<small>&nbsp;<em>(${languageLabel})</em></small>` : ''}
      ${await this.templateFieldMenu()}
    </label>` : ''
  }

  async templateDescription () {
    return this.Field.description ? this.html`
    <small class="description">
      ${this.Field.description}
    </small>` : ''
  }

  async templateItem (index, value, placeholder = null): Promise<typeof html | HTMLElement> {
    const textValue = value?.['@' + this.jsonLdValueType] ?? value

    return this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      disabled="${this.Field.disabled ? true : null}"
      readonly="${this.Field.readonly ? true : null}"
      placeholder="${placeholder ?? this.Field.placeholder}"
      .value="${textValue ? textValue : ''}"
      required="${this.isRequired(index)}"
    >`
  }

  async templateItemFooter (index: number, value) {
    return false
  }

  async templateReferenceLabel (meta, uri: string) {
    const label = meta?.label
    const thumbnail = meta?.thumbnail

    return this.html`
      <div class="reference-label">
        ${label === false ? this.html`<span class="reference-loading">${t.direct('Could not load data')}</span>` : this.html`
          ${thumbnail ? this.html`<div class="image"><img src="${`//images.weserv.nl/?url=${thumbnail}&w=100&h=100`}"></div>` : ''}
          ${label ? this.html`<a href="${uri}" target="_blank">${label}</a>` : this.html`<span class="reference-loading">${t.direct('Loading...')}</span>`}
        `}
      </div>
    `
  }

  async templateFieldMenu () {
    const buttons = this.getMenuButtons()

    return buttons.length ? this.html`
      <div class="menu-wrapper" open="${this.menuIsOpen}">
        <button type="button" class="menu-button button" onclick="${() => {this.menuIsOpen = !this.menuIsOpen; this.render()}}">${fa(faCog)}</button>
        <ul onclick="${() => {this.menuIsOpen = false; this.render()}}" class="menu">
          ${buttons.map(button => this.html`<li>${button}</li>`)}
        </ul>
      </div>
    ` : ''
  }

  async templateRemoveButton (index: number) {
    return this.html`
    <button index="${index}" type="button" class="button remove" onclick="${() => {
      this.Values.removeItem(index)
      this.render()
      }}">
      ${fa(faTimes)}
    </button>`
  }

  async templateSearchSuggestions (index: number) {
    const searchSuggestions = this.searchSuggestions.get(index) ?? []
    const hasResults = !(searchSuggestions[0]?.value)

    return searchSuggestions.length ? this.html`
    <ul class="search-suggestions">
      ${!hasResults ? this.html`<li class="search-suggestion no-results">
        <span class="title">${t`Nothing found`}</span>
      </li>` : ''}
      ${searchSuggestions.map(suggestion => this.html`
      <li class="search-suggestion" onclick="${async () => {
        if (suggestion.uri) {
          await this.selectSuggestion(suggestion.uri, index);
        }
        else if (suggestion.value) {
          await this.selectValue(suggestion.value, index);
        }

        this.render()
      }}">
        ${suggestion.image ? this.html`<div class="image"><img src="${`//images.weserv.nl/?url=${suggestion.image}&w=100&h=100`}"></div>` : ''}
        <span class="title">${suggestion.label?.[Language.current] ?? suggestion.label}</span>
      </li>`)}
    </ul>
      ` : ''
  }

  async templateActions (actionsObject) {
    const actions = Object.values(actionsObject)

    return this.html`
      ${actions.length ? this.html`
      <div class="actions">
        ${actions}
      </div>
      ` : ''}
    `
  }

  /**
   * Called via the RdfForm
   * @see RdfForm.render()
   */
  async templateWrapper (childIndex = null) {
    const itemsToRender = []

    if (childIndex === null) {
      for (const [index, value] of this.Values.getAllFromBinding().entries()) {
        if (this.Values.hasTranslations && value?.['@language'] === Language.currentL10nLanguage) {
          itemsToRender.push([index, value])
        }
  
        if (!this.Values.hasTranslations) {
          itemsToRender.push([index, value])
        }
      }  
    }
    else {
      itemsToRender.push([childIndex, this.Values.get(childIndex)])
    }

    if (itemsToRender.length === 0) {
      itemsToRender.push([this.Values.length, null])
    }

    const actions = []

    if (this.Field.multiple) {
      actions['addItem'] = this.html`<button type="button" class="button add" onclick="${() => {
        this.Values.addItem()
        this.render()
      }}">${t.direct('Add item')}</button>`
    }

    return this.html`
    <div class="form-element" name="${this.Field.name}" type="${this.getType()}">

      ${await this.templateLabel()}

      ${this.html`
        <div class="items">
        ${await Promise.all(itemsToRender.map(async (item) => {
          const index = item[0]
          const value = item[1]

          const templateItemFooter = await this.templateItemFooter(index, value)

          return this.html`
          <div class="item" expanded="${this.shouldShowExpanded(index)}" loading="${this.isLoading.get(index)}">
            ${await this.templateItem(index, value)}
            ${this.isRemovable(index) && childIndex === null ? await this.templateRemoveButton(index) : ''}
            ${templateItemFooter ? this.html`<div class="item-footer">${templateItemFooter}</div>` : ''}
          </div>
        `}))}

        </div>
      `}

      ${await this.templateDescription()}

      ${await this.templateActions(actions)}

    </div>`
  }

  async serialize (jsonLd) {
    
  }
}

