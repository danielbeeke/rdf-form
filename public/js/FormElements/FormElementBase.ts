/**
 * This is the base class for every form element.
 * You can extend this class and overwrite the template methods that you want to change.
 * It is possible to use the formElements without RDF form,
 * However you still should use FieldDefinitions and FieldValues.
 */

import { faTimes, faCog } from '../vendor/free-solid-svg-icons.js'
import { FieldDefinitionOptions, FormElement } from '../Types'
import { debounce, waiter, fetchObjectByPredicates, fa } from '../Helpers'

import { PathFactory }  from '../vendor/LDflex.js'
import { ComunicaEngine } from '../vendor/LDFlex-comunica.js'
import { namedNode } from '../vendor/rdf-data-model.js'
import { FieldValues } from '../FieldValues'
import { FieldDefinition } from '../FieldDefinition'
import { t, Language} from '../LanguageService'
import { html } from '../vendor/uhtml.js'

if (!window.RdfForm) { window.RdfForm = { formElements: [] } }

export class FormElementBase extends EventTarget {

  static type: string = 'base'

  public expanded = new Map()
  public values: Array<any> = []
  public Values: FieldValues
  public Field: FieldDefinitionOptions
  public html: any
  public parent: any
  public searchSuggestions: Map<string | number, Array<any>> = new Map()
  public metas = new Map()
  public render: any
  public isLoading = new Map()
  public children: Map<string, FormElement> = null
  public jsonLdValueType: string = 'value'
  public comunica

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
    field: FieldDefinitionOptions,
    values: FieldValues,
    children: Map<string, FormElement> = null,
    renderCallback: any,
    comunica,
    formPrefix,
    jsonLdContext = {}
    ) {
    super()
    this.html = html
    this.comunica = comunica
    this.Field = FieldDefinition(field, formPrefix)
    this.pathContext['@language'] = Language.current
    this.pathContext = {...this.pathContext, ...jsonLdContext}
    this.Values = values
    this.Values.jsonLdValueType = this.jsonLdValueType

    if (children) {
      this.children = children
    }

    if (renderCallback) {
      this.render = debounce(() => renderCallback(), 100)
    }
  }

  async init () {}

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

    if (this.Field.translatable && !this.Values.hasTranslations) {
      buttons.push(this.createButton('add', () => this.Values.enableTranslations(), 'Create translation'))
    }

    if (this.Field.translatable && this.Values.hasTranslations) {
      buttons.push(this.createButton('remove', () => this.Values.removeTranslations(), 'Remove translations'))
    }

    return buttons
  }

  serialize () {
    const values = this.Values.getAll()
    return values.length ? values : null
  }

  /*****************************************************************************************************************
   * Mutators, most of them are inside FieldValues, these are here because they do more then only mutate a value.
   *****************************************************************************************************************/

  async selectSuggestion (suggestionUrl, index) {
    this.searchSuggestions.set(index, [])
    this.Values.set({ '@id': suggestionUrl }, index)
    this.expanded.set(index, false)
    await this.updateMetas()
  }

  async selectValue (value, index) {
    this.Values.set({ '@value': value }, index)
    this.expanded.set(index, false)
    this.searchSuggestions.set(index, [])
  }

  on (event, index) {
    if (['keyup', 'change'].includes(event.type)) {
      const value = {}
      value['@' + this.jsonLdValueType] = event?.target?.value
      if (this.Values.hasTranslations) {
        value['@language'] = Language.currentL10nLanguage
      }
      this.Values.set(value, index)

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
    for (const value of this.Values.getAll()) {
      const uri = value?.['@id']

      if (uri && !this.metas.get(uri)) {
        const queryEngine = new ComunicaEngine(uri, {
          httpProxyHandler: this.comunica.httpProxyHandler
        }, this.comunica);
        const path = new PathFactory({ context: this.pathContext, queryEngine });
        const flexPath = path.create({ subject: namedNode(uri) })
        this.metas.set(uri, flexPath)
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
    return this.Field.label ? this.html`
    <label class="label">
      ${this.Field.label}
      ${this.Field.required ? this.html`<span class="label-required-star">*</span>` : ''}
      <small>&nbsp;<em>(${this.Values.hasTranslations ? Language.l10nLanguages[Language.currentL10nLanguage] : t.direct('Language independent')})</em></small>
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
      placeholder="${placeholder ?? this.Field.placeholder}"
      .value="${textValue}"
      required="${this.isRequired(index)}"
    >`
  }

  async templateItemFooter (index: number, value) {
    return false
  }

  async templateReferenceLabel (flexPath, uri: string) {
    const waiterId = await flexPath.toString() + '@' + Language.current
    const labelPromise = fetchObjectByPredicates(flexPath, Language.current, ['rdfs:label', 'foaf:name', 'schema:name', 'user:username'])
    const thumbnailPromise = fetchObjectByPredicates(flexPath, Language.current, ['dbo:thumbnail', 'foaf:depiction', 'schema:image', 'foaf:img'])

    const label = waiter(waiterId + 'label', labelPromise, this.render)
    const thumbnail = waiter(waiterId + 'thumbnail', thumbnailPromise, this.render)

    return this.html`
      <div class="reference-label">
        ${label === 'error' ? this.html`<span class="reference-loading">${t.direct('Could not load data')}</span>` : this.html`
          ${thumbnail.loading ? '' : (thumbnail !== 'error' ? this.html`<div class="image"><img src="${thumbnail}"></div>` : '')}
          ${label.loading ? this.html`<span class="reference-loading">${t.direct('Loading...')}</span>` : this.html`<a href="${uri}" target="_blank">${label}</a>`}
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
    this.html`
    <button type="button" class="button remove" onclick="${() => {
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
        ${suggestion.image ? this.html`<div class="image"><img src="${suggestion.image}"></div>` : ''}
        <span class="title">${suggestion.label?.[Language.current] ?? suggestion.label}</span>
      </li>`)}
    </ul>
      ` : ''
  }

  /**
   * Called via the RdfForm
   * @see RdfForm.render()
   */
  async templateWrapper () {
    const itemsToRender = []

    for (const [index, value] of this.Values.getAll().entries()) {
      if (this.Values.hasTranslations && value?.['@language'] === Language.currentL10nLanguage) {
        itemsToRender.push([index, value])
      }

      if (!this.Values.hasTranslations) {
        itemsToRender.push([index, value])
      }
    }

    if (itemsToRender.length === 0) {
      itemsToRender.push([null, null])
    }

    const actions = []

    if (this.Field.multiple) {
      actions.push(this.html`<button type="button" class="button add" onclick="${() => {
        this.Values.addItem()
        this.render()
      }}">${t.direct('Add item')}</button>` )
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
            ${this.isRemovable(index) ? await this.templateRemoveButton(index) : ''}
            ${templateItemFooter ? this.html`<div class="item-footer">${templateItemFooter}</div>` : ''}
          </div>
        `}))}

        </div>
      `}

      ${await this.templateDescription()}

      ${actions.length ? this.html`
      <div class="actions">
        ${actions}
      </div>
      ` : ''}

    </div>`
  }

}

