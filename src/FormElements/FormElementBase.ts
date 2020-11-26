/**
 * This is the base class for every form element.
 * You can extend this class and overwrite the template methods that you want to change.
 *
 * Also if you only want to change css classes you can use the following:
 * - Inspect the template and search for classy:IDENTIFIER="DEFAULT_CLASSES"
 * - Before starting RdfForm call:
 * - Classy.add(IDENTIFIER, ['your', 'classes'])
 * - Classy.add('formElement', ['your', 'classes'])
 */

import { newEngine } from '@comunica/actor-init-sparql'
import { RdfForm } from '../RdfForm'
import { faTimes, faCog, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { fieldPrototype } from '../Types'
import {debounce, waiter, fetchObjectByPredicates, fa } from '../Helpers'
import { Classy } from '../Classy'

const { PathFactory } = require('../../../LDflex/lib/index.js');
const { default: ComunicaEngine } = require('../../../LDflex-Comunica');
const { namedNode } = require('@rdfjs/data-model');

export class FormElementBase extends EventTarget {

  static type: string = 'base'

  public expanded = new Map()
  public field: fieldPrototype
  public form: RdfForm
  public values: Array<any> = []
  public html: any
  public searchSuggestions = []
  public metas = new Map()
  public render: any
  public isLoading = new Map()

  private menuIsOpen: boolean = false
  private pathContext = {
    "schema": "http://schema.org/",
    "dbo": "http://dbpedia.org/ontology/",
    "dbp": "http://dbpedia.org/property/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
  }

  constructor (field, rdfForm: RdfForm) {
    super()
    this.html = Classy
    this.form = rdfForm
    this.field = field

    this.pathContext['@language'] = this.form.language

    this.values = this.form.expandedData[this.field.binding] ? (
      Array.isArray(this.form.expandedData[this.field.binding]) ?
      this.form.expandedData[this.field.binding] :
      [this.form.expandedData[this.field.binding]]
    ) : []

    this.render = debounce(() => this.form.render(), 100)
  }

  async init () {}

  /************************************************************************
   * Getters and setters.
   ************************************************************************/

  getType () {
    /** @ts-ignore */
    return this.constructor.type.toLowerCase()
  }

  get label () {
    const label = this.field.label[this.form.language]
    return label ? label.charAt(0).toUpperCase() + label.slice(1) : ''
  }

  get description () {
    return ''
  }

  get hasTranslations () {
    return !!this.values?.[0]?.['@language']
  }

  get anotherTranslationIsPossible () {
    const usedLanguagesCount = this.values.map(value => value['@language']).length
    const i10nLanguagesCount = Object.keys(this.form.i10nLanguages).length
    return this.hasTranslations && usedLanguagesCount < i10nLanguagesCount
  }

  showRemoveButton (index) {
    return index > 0
  }

  shouldShowExpanded (index) {
    return this.expanded.get(index) ||
      !this.values[index] ||
      this.isLoading.get(index)
  }

  isRequired (index) {
    return index === 0 && this.field.required ? true : null
  }

  isRemovable (index) {
    return !(this.field.required && this.values.length < 2)
  }

  getMenuButtons () {
    const buttons = []

    if (this.field.translatable && !this.hasTranslations) {
      buttons.push(this.createButton('add', 'enableTranslations', 'Create translation'))
    }

    if (this.field.translatable && this.hasTranslations) {
      buttons.push(this.createButton('remove', 'removeTranslations', 'Remove translations'))
    }

    return buttons
  }

  serialize () {
    return this.values
  }

  /************************************************************************
   * Mutators.
   ************************************************************************/

  addTranslation () {
    let usedLanguages = this.values.map(value => value['@language'])
    let unusedLanguages = Object.keys(this.form.i10nLanguages).filter(language => !usedLanguages.includes(language))

    if (unusedLanguages.length) {
      this.values.push({ '@value': '', '@language': unusedLanguages.shift() })
    }
  }

  addItem () {
    if (typeof this.values[0] === 'object') {
      const newItem = Object.assign({}, this.values[0], { '@value': '' })
      if (newItem['@id']) newItem['@id'] = ''
      this.values.push(newItem)
    }
    else {
      this.values.push('')
    }
  }

  removeItem (index) {
    this.values.splice(index, 1)
  }

  enableTranslations () {
    for (const [index, value] of this.values.entries()) {
      if (typeof value === 'object') {
        this.values[index]['@language'] = this.form.language
      }
      else {
        this.values[index] = {
          '@value': this.values[index],
          '@language': this.form.language
        }
      }
    }

    if (!this.values.length) {
      this.values[0] = {
        '@value': '',
        '@language': this.form.language
      }
    }
  }

  removeTranslations () {
    if (this.values?.[0]?.['@language']) {
      this.values = [this.values?.[0]?.['@value']]
    }
  }

  setValue (event, index) {
    if (!event?.target?.value) return
    if (typeof this.values[index]?.['@value'] !== 'undefined') {
      this.values[index]['@value'] = event.target.value
    }
    else if (typeof this.values[index]?.['@id'] !== 'undefined') {
      this.values[index]['@id'] = event.target.value
    }
    else {
      this.values[index] = event.target.value
    }
  }

  async selectSuggestion (suggestionUrl, index) {
    this.searchSuggestions = []
    if (!this.values[index]?.['@id']) {
      this.values[index] = { '@id': '' }
    }
    this.values[index]['@id'] = suggestionUrl
    this.expanded.set(index, false)
    await this.updateMetas()
  }

  removeReference (index) {
    this.values[index]['@id'] = ''
  }

  /************************************************************************
   * Helpers.
   ************************************************************************/

  createButton (buttonClass, method, label) {
    return this.html`<button type="button" class="${'button ' + buttonClass}" onclick="${() => {
      this[method]()
      this.render()
    }}">${this.form.t.direct(label)}</button>`
  }

  on (event, index) {
    this.setValue(event, index)
    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }

  async sparqlQuery (query, source, disabledProxy = false) {
    const config = {}
    if (this.form.proxy && !disabledProxy) config['httpProxyHandler'] = this.form.proxy
    const myEngine = newEngine();
    const result = await myEngine.query(query, Object.assign({ sources: [source] }, config));

    /** @ts-ignore */
    const bindings = await result.bindings()

    const items: Map<string, any> = new Map()

    for (const binding of bindings) {
      let label = binding.get('?label')?.id ?? binding.get('?label')?.value
      const valueAndLanguage = label.split('@')

      if (valueAndLanguage.length > 1) {
        label = {}
        label[valueAndLanguage[1].trim('"')] = valueAndLanguage[0].slice(1, -1)
      }

      const uri = binding.get('?uri')?.value
      let image = binding.get('?image')?.value

      if (!items.get(uri)) {
        items.set(uri, { label, uri, image })
      }
      else {
        const existingItem = items.get(uri)
        Object.assign(existingItem.label, label)
        items.set(uri, existingItem)
      }
    }

    return [...items.values()]
  }

  async searchSuggestionsSparqlQuery (searchTerm: string = '') {
    if (searchTerm === '' || (searchTerm.length < 4)) return
    searchTerm = searchTerm.trim()
    if (searchTerm.length > 4) searchTerm += '*'

    let query: string = this.field.autoCompleteQuery
    const source = this.field.autoCompleteSource ? this.field.autoCompleteSource.replace(/SEARCH_TERM/g, searchTerm) : { type: 'sparql', value: 'http://dbpedia.org/sparql' }

    query = query.replace(/LANGUAGE/g, this.form.language)
    query = query.replace(/SEARCH_TERM/g, searchTerm)

    const searchSuggestions = await this.sparqlQuery(query, source, !this.field.autoCompleteSource)

    this.searchSuggestions = searchSuggestions.length ? searchSuggestions : [{
      label: this.form.t`Nothing found`,
      uri: null,
      image: null
    }]
  }

  async dbpediaSuggestions (searchTerm: string) {
    // Add the following if you want to filter by dbpedia class: ?o dbo:ingredient ?uri .
    searchTerm = searchTerm.trim()
    if (searchTerm.length > 4) searchTerm += '*'

    const query = `

    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dbo:  <http://dbpedia.org/ontology/>
    PREFIX bif: <bif:>

    SELECT DISTINCT ?uri ?label ?image {

      ?uri rdfs:label ?label .
      ?uri dbo:thumbnail ?image .

      ?label bif:contains "'${searchTerm}'" .

      filter langMatches(lang(?label), "${this.form.language}")
    }

    LIMIT 60`

    const searchSuggestions = await this.sparqlQuery(query, { type: 'sparql', value: 'http://dbpedia.org/sparql' }, true)

    this.searchSuggestions = searchSuggestions.length ? searchSuggestions : [{
      label: this.form.t`Nothing found`,
      uri: null,
      image: null
    }]
  }

  async updateMetas () {
    for (const value of this.values) {
      const uri = value?.['@id']

      if (!this.metas.get(uri)) {
        const queryEngine = new ComunicaEngine(uri, {
          'httpProxyHandler': this.form.proxy
        });

        const path = new PathFactory({ context: this.pathContext, queryEngine });
        this.metas.set(uri, path.create({ subject: namedNode(uri) }))
      }
    }
  }

  /************************************************************************
   * Templates.
   ************************************************************************/

  async templateLabel () {
    return this.label ? this.html`
    <label classy:label="label">
      ${this.label}
      ${this.field.required ? this.html`<span>*</span>` : ''}
      ${await this.templateFieldMenu()}
    </label>` : ''
  }

  async templateDescription () {
    return this.description ? this.html`
    <small classy:description="description">
      ${this.description}
    </small>` : ''
  }

  async templateItem (index, value) {
    const textValue = value?.['@value'] ?? value

    return this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      value="${textValue}"
      required="${this.isRequired(index)}"
    >`
  }

  async templateLanguageSelector (index, value) {
    const selectedLanguage = value['@language']
    let usedLanguages = this.values.map(value => value['@language'])
    let unusedLanguages = Object.keys(this.form.i10nLanguages).filter(language => !usedLanguages.includes(language))
    unusedLanguages.push(selectedLanguage)

    return this.html`
    <select onchange="${event => this.values[index]['@language'] = event.target.value}" classy:languageSelector="language-selector">
    ${unusedLanguages.map((language) => this.html`
      <option value="${language}" selected="${language === selectedLanguage ? true : null}">${this.form.i10nLanguages[language]}</option>
    `)}
    </select>`
  }

  async templateItemFooter (index, value) {
    return false
  }

  async templateReferenceLabel (flexPath, uri) {
    const waiterId = await flexPath.toString() + '@' + this.form.language
    const labelPromise = fetchObjectByPredicates(flexPath, this.form.language, ['rdfs:label', 'foaf:name', 'schema:name'])
    const thumbnailPromise = fetchObjectByPredicates(flexPath, this.form.language, ['dbo:thumbnail', 'foaf:depiction', 'schema:image'])
    const label = waiter(waiterId + 'label', labelPromise, this.render)
    const thumbnail = waiter(waiterId + 'thumbnail', thumbnailPromise, this.render)

    return this.html`
      <div classy:referenceLabel="reference-label">
        ${thumbnail.loading ? '' : this.html`<img src="${thumbnail}">`}
        ${label.loading ? this.form.t.direct('Loading...') : this.html`<a href="${uri}" target="_blank">${label}</a>`}
      </div>
    `
  }

  async templateFieldMenu () {
    const buttons = this.getMenuButtons()

    return buttons.length ? this.html`
      <div classy:menu-wrapper="menu-wrapper" open="${this.menuIsOpen}">
        <button type="button" classy:menuButton="menu-button button" onclick="${() => {this.menuIsOpen = !this.menuIsOpen; this.render()}}">
            ${fa(faCog)}
        </button>
        <ul onclick="${() => {this.menuIsOpen = false; this.render()}}" classy:menu="menu">
          ${buttons.map(button => this.html`<li>${button}</li>`)}
        </ul>
      </div>
    ` : ''
  }

  async templateRemoveButton (index) {
    return this.html`
    <button type="button" class="button remove" onclick="${() => {
      this.removeItem(index)
      this.render()
      }}">
      ${fa(faTimes)}
    </button>`
  }

  async templateSearchSuggestions (index) {
    return this.searchSuggestions.length ? this.html`
    <ul classy:searchSuggestions="search-suggestions">
      ${this.searchSuggestions.map(suggestion => this.html`
      <li classy:searchSuggestion="search-suggestion" onclick="${suggestion.uri ? async () => {
        await this.selectSuggestion(suggestion.uri, index); this.render()
      } : () => ''}">
        ${suggestion.image ? this.html`<img src="${suggestion.image}">` : ''}
        <span classy:suggestionTitle="title">${suggestion.label?.[this.form.language] ?? suggestion.label}</span>
      </li>`)}
    </ul>
      ` : ''
  }

  /**
   * Called via the RdfForm
   * @see RdfForm.render()
   */
  async templateWrapper () {
    const countToRender = this.values.length ? this.values.length : 1

    const itemsToRender = []
    for (let i = 0; i < countToRender; i++) {
      itemsToRender.push(this.values[i] ? this.values[i] : null)
    }

    return this.html`
    <div classy:wrapper="form-element" type="${this.getType()}">

      ${await this.templateLabel()}

      ${this.html`
        <div classy:items="items">
        ${await Promise.all(itemsToRender.map(async (value, index) => {
          const templateItemFooter = await this.templateItemFooter(index, value)

          return this.html`
          <div classy:item="item" expanded="${this.shouldShowExpanded(index)}" loading="${this.isLoading.get(index)}">
            ${await this.templateItem(index, value)}
            ${this.values[index]?.['@language'] ? await this.templateLanguageSelector(index, value) : ''}
            ${this.isRemovable(index) ? await this.templateRemoveButton(index) : ''}
            ${templateItemFooter ? this.html`<div classy:item-footer="item-footer">${templateItemFooter}</div>` : ''}
          </div>
        `}))}
        </div>
      `}

      ${await this.templateDescription()}

      <div classy:actions="actions">
        ${this.field.translatable && this.anotherTranslationIsPossible && this.hasTranslations ? this.html`<button type="button" class="button add" onclick="${() => {
          this.addTranslation()
          this.render()
        }}">${this.form.t.direct('Add translation')}</button>` : ''}

        ${this.field.multiple ? this.html`<button type="button" class="button add" onclick="${() => {
          this.addItem()
          this.render()
        }}">${this.form.t.direct('Add item')}</button>` : ''}
      </div>
    </div>`
  }

}

