/**
 * This is the base class for every form element.
 * You can extend this class and only overwrite the template methods that you want to change.
 *
 * Also if you only want to change css classes you can use the following:
 * - Inspect the template and search for classy:IDENTIFIER="DEFAULT_CLASSES"
 * - Before starting RdfForm call:
 * - Classy.add(IDENTIFIER, ['your', 'classes'])
 * - Classy.add('formElement', ['your', 'classes'])
 */

import { newEngine } from '@comunica/actor-init-sparql'
import { RdfForm } from '../RdfForm'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faQuestionCircle, faPlus, faLanguage, faCog } from '@fortawesome/free-solid-svg-icons'
import { fieldPrototype } from '../Types'
import { Classy } from '../Classy'

const { PathFactory } = require('../../../LDflex/lib/index.js');
const { default: ComunicaEngine } = require('@ldflex/comunica');
const { namedNode } = require('@rdfjs/data-model');

dom.watch()
library.add(faTimes, faQuestionCircle, faPlus, faLanguage, faCog)

export class FormElementBase extends EventTarget {

  static type: string = 'base'

  public field: fieldPrototype
  public form: RdfForm
  public values: Array<any> = []
  public html: any
  public searchSuggestions = []
  public metas = new Map()

  private menuIsOpen: boolean = false
  private pathContext = {
    "db": "http://dbpedia.org/ontology/",
    "dbp": "http://dbpedia.org/property/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "dc": "http://purl.org/dc/terms/",
    "rdf": "http://www.w3.org/2000/01/rdf-schema#",
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
  }

  async init () {}

  render () {
    return this.form.render()
  }

  /************************************************************************
   * Getters and setters.
   ************************************************************************/

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
    const i14nLanguagesCount = Object.keys(this.form.i14nLanguages).length
    return this.hasTranslations && usedLanguagesCount < i14nLanguagesCount
  }

  showRemoveButton (index) {
    return index > 0
  }

  isRequired (index) {
    return index === 0 && this.field.required
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

  /************************************************************************
   * Mutators.
   ************************************************************************/

  addTranslation () {
    let usedLanguages = this.values.map(value => value['@language'])
    let unusedLanguages = Object.keys(this.form.i14nLanguages).filter(language => !usedLanguages.includes(language))

    if (unusedLanguages.length) {
      this.values.push({ '@value': '', '@language': unusedLanguages.shift() })
    }
  }

  addItem () {
    if (typeof this.values[0] === 'object') {
      this.values.push(Object.assign({}, this.values[0], { '@value': '' }))
    }
    else {
      this.values.push('')
    }
  }

  removeItem (index) {
    this.values.splice(index, 1)
    console.log(this.values)
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
  }

  removeTranslations () {
    if (this.values?.[0]?.['@language'] && this.values?.[0]?.['@value']) {
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
    await this.updateMetas()
  }

  removeReference (index) {
    this.values[index]['@id'] = ''
  }

  /************************************************************************
   * Helpers.
   ************************************************************************/

  createButton (buttonClass, method, label) {
    return this.html`<button class="${'button ' + buttonClass}" onclick="${() => {
      this[method]()
      this.render()
    }}">${this.form.t.direct(label)}</button>`
  }

  on (event, index) {
    this.setValue(event, index)
    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index
      }
    }))
  }

  async sparqlQuery (searchTerm: string = '') {
    let query: string = this.field.autoCompleteQuery
    query = query.replace(/LANGUAGE/g, this.form.language)
    query = query.replace(/SEARCH_TERM/g, searchTerm)

    const config = {}
    if (this.form.proxy) config['@comunica/actor-http-proxy:httpProxyHandler'] = this.form.proxy
    const myEngine = newEngine();
    const result = await myEngine.query(query, { sources: [this.field.autoCompleteSource], config });

    /** @ts-ignore */
    const bindings = await result.bindings()

    for (const binding of bindings) {
      let label = binding.get('?label')?.id
      if (label.split('"').length > 1) label = label.split('"')[1]
      const uri = binding.get('?uri')?.id
      this.searchSuggestions.push({ label, uri })
    }
  }

  async dbpediaSuggestions (searchTerm: string) {
    const response = await fetch(`https://lookup.dbpedia.org/api/prefix?query=${searchTerm}`)
    const xml = await response.text();

    const parser = new DOMParser();
    const dom: any = parser.parseFromString(xml, 'application/xml')

    this.searchSuggestions = []

    for (const result of dom.querySelectorAll('Result')) {
      const label = result.querySelector('Label').textContent
      const uri = result.querySelector('URI').textContent

      // Dedup languages.
      if (uri.substr(0, 18) === 'http://dbpedia.org') {
        this.searchSuggestions.push({ label, uri })
      }
    }
  }

  async updateMetas () {
    for (const value of this.values) {
      const uri = value?.['@id']

      if (!this.metas.get(value)) {
        const queryEngine = new ComunicaEngine(uri);
        const path = new PathFactory({ context: this.pathContext, queryEngine });
        this.metas.set(value, path.create({ subject: namedNode(uri) }))
      }
    }
  }

  /************************************************************************
   * Templates.
   ************************************************************************/

  templateLabel () {
    return this.label ? this.html`
    <label classy:label="label">
      ${this.label}
      ${this.field.required ? this.html`<span>*</span>` : ''}
      ${this.templateFieldMenu()}
    </label>` : ''
  }

  templateDescription () {
    return this.description ? this.html`
    <small classy:description="description">
      ${this.description}
    </small>` : ''
  }

  templateItem (index, value) {
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

  templateLanguageSelector (index, value) {
    const selectedLanguage = value['@language']
    let usedLanguages = this.values.map(value => value['@language'])
    let unusedLanguages = Object.keys(this.form.i14nLanguages).filter(language => !usedLanguages.includes(language))
    unusedLanguages.push(selectedLanguage)

    return this.html`
    <select onchange="${event => this.values[index]['@language'] = event.target.value}" classy:languageSelector="language-selector">
    ${unusedLanguages.map((language) => {
      return language === selectedLanguage ? this.html`
        <option value="${language}" selected>${this.form.i14nLanguages[language]}</option>
        ` : this.html`
        <option value="${language}">${this.form.i14nLanguages[language]}</option>
        `
    })}
    </select>`
  }

  templateItemFooter (index, value) {
    return false
  }

  templateReferencePreview (meta) {
    return this.html`
    <div classy:referencePreview="reference-preview">
        ${meta.thumbnail ? this.html`<img classy:referencePreviewLeft="left" src="${meta.thumbnail}" />` : ''}
        <div classy:referencePreviewRight="right">
          ${meta.label ? this.html`<h3 classy:referencePreviewTitle="title">
          ${meta.label}
          </h3>` : ''}
          ${meta.description ? this.html`<small classy:referencePreviewDescription="description">${meta.description}</small>` : ''}
        </div>
    </div>
    `
  }

  templateFieldMenu () {
    const buttons = this.getMenuButtons()

    return buttons.length ? this.html`
      <div classy:menu-wrapper="menu-wrapper">
        <button classy:menuButton="menu-button button" onclick="${() => {this.menuIsOpen = !this.menuIsOpen; this.render()}}">
            <i class="fas fa-cog"></i>
        </button>
        <ul onclick="${() => {this.menuIsOpen = false; this.render()}}" open="${this.menuIsOpen}" classy:menu="menu">
          ${buttons.map(button => this.html`<li>${button}</li>`)}
        </ul>
      </div>
    ` : ''
  }

  /**
   * Called via the RdfForm
   * @see RdfForm.render()
   */
  templateWrapper () {
    const countToRender = this.values.length ? this.values.length : 1

    const itemsToRender = []
    for (let i = 0; i < countToRender; i++) {
      itemsToRender.push(this.values[i] ? this.values[i] : null)
    }

    return this.html`
    <div classy:wrapper="form-element" type="${this.constructor.name.toLowerCase()}">

      ${this.templateLabel()}

      ${this.html`
        <div classy:items="items">
        ${itemsToRender.map((value, index) => {
          const templateItemFooter = this.templateItemFooter(index, value)

          return this.html`
          <div classy:item="item">
            ${this.templateItem(index, value)}
            ${this.values[index]?.['@language'] ? this.templateLanguageSelector(index, value) : ''}

            <button class="button remove" onclick="${() => {
              this.removeItem(index)
              this.render()
            }}">
              <i class="fas fa-times"></i>
            </button>

            ${templateItemFooter ? this.html`<div classy:item-footer="item-footer">${templateItemFooter}</div>` : ''}
          </div>
        `})}
        </div>
      `}

      ${this.templateDescription()}

      <div classy:actions="actions">
        ${this.field.translatable && this.anotherTranslationIsPossible && this.hasTranslations ? this.html`<button class="button add" onclick="${() => {
          this.addTranslation()
          this.render()
        }}">${this.form.t.direct('Add translation')}</button>` : ''}

        ${this.field.multiple ? this.html`<button class="button add" onclick="${() => {
          this.addItem()
          this.render()
        }}">${this.form.t.direct('Add item')}</button>` : ''}
      </div>
    </div>`
  }

}

