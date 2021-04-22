import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { faTimes, faPlus, faLanguage } from '../helpers/icons'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'
import { getUriMeta } from '../helpers/getUriMeta'
import { t, Language } from '../core/Language'
import { lastPart } from '../helpers/lastPart'
import { fa } from '../helpers/fa'

export class ElementBase extends EventTarget {

  protected definition: object
  protected bindings: Array<string>
  protected value: any
  protected parentValues: any
  public parent: any
  protected jsonldKey = 'value'
  protected comunica: any
  protected mainBinding: string = null
  public render = () => null 
  protected suggestions: Array<any> = []
  protected attributes = {
    disabled: false,
    readonly: false,
    type: 'input',
    class: [],
    placeholder: null
  }

  protected wrapperAttributes = {
    open: false,
    class: ['form-element']
  }

  protected labelAttributes = {
    class: ['label']
  }

  constructor (...args: any[]) {
    super()
    const [ definition, bindings, value, parentValues, render, parent ] = args

    this.definition = definition
    this.bindings = bindings

    this.mainBinding = definition['form:binding']?._
    this.parentValues = parentValues
    this.value = value
    this.render = render
    this.parent = parent

    if (this.definition['form:placeholder']?._) this.attributes.placeholder = this.definition['form:placeholder']?._
  }

  async on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      if (!this.value) await this.addItem()
      if (this.value) this.value[`@${this.jsonldKey}`] = event.target.value
    }
  }

  get removable () {
    const hasValue = this.value?._
    const parentIsGroup = this.parent?.definition?.['form:widget']?._ === 'group'
    return hasValue && !parentIsGroup
  }

  async languages () {
    const fieldLanguages = this.parentValues?.[this.mainBinding] ? await Language.extractUsedLanguages(this.parentValues) : []
    return fieldLanguages
  }

  async addItem () {
    const value = { [`@${this.jsonldKey}`]: null }
    const fieldLanguages = this.parentValues?.[this.mainBinding] ? await Language.extractUsedLanguages(this.parentValues) : []
    if (fieldLanguages.length) value['@language'] = Language.l10nLanguage
    if (!this.parentValues[this.mainBinding]) this.parentValues[this.mainBinding] = []
    this.parentValues?.[this.mainBinding].push(value)
    this.value = value
  }

  /**
   * Start of templates
   */

  wrapper (innerTemplates: Array<typeof html> = []) {
    const type = kebabize(this.constructor.name)

    return html`
    <div ref=${attributesDiff(this.wrapperAttributes)} type="${type}">
      ${this.label()}
      ${innerTemplates.length ? html`
        <div class="items">
          ${innerTemplates}
        </div>
      ` : ''}
      ${this.definition['form:multiple']?._ ? html`<div>${this.addButton()}</div>` : html``}
    </div>`
  }

  item (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
      ${this.input()}
      ${this.removeButton()}
      ${childTemplates}
    </div>`
  }

  addButton () {
    return html`<button type="button" class="button add primary" onclick="${async () => {
      await this.addItem()
      this.render()
    }}">
      ${fa(faPlus)}
    </button>`
  }

  removeButton () {
    return this.removable ? html`<button type="button" class="button remove danger" onclick="${() => {
      const valueArray = this.parentValues[this.definition['form:binding']?._]?.$

      if (valueArray) {
        const index = valueArray.indexOf(this.value.$)
        valueArray.splice(index, 1)  
      }

      this.render();
    }}">
      ${fa(faTimes)}
    </button>` : html``
  }

  input () {
    return html`
      <input 
        ref=${attributesDiff(this.attributes)} 
        .value=${this.value?._ ?? ''} 
        onchange=${(event) => this.on(event)}
        onkeyup=${(event) => this.on(event)}
      />
    `
  }

  async label () {
    let languageLabel = ''

    if (this.definition['form:translatable']?._) {
      const applicableValues = this.parentValues[this.mainBinding] ? [...this.parentValues[this.mainBinding].values()]
      .filter((value) => !value['@language'] || value['@language'] === Language.l10nLanguage) : []

      const hasLanguage = this.parentValues[this.mainBinding] ? [...this.parentValues[this.mainBinding].values()].some(value => value?.['@language']) : false
      const language = applicableValues.map((value) => value['@language'])[0]

      if (language) {
        languageLabel = `(${Language.l10nLanguages[language]})`
      }
      else if (this.value === null && hasLanguage) {
        languageLabel = `(${Language.l10nLanguages[Language.l10nLanguage]})`
      }
    }

    const disableLanguage = () => {
      const values = this.parentValues[this.mainBinding]
      values.splice(1)
      delete values[0]['@language']
      this.render()
    }

    const enableLanguage = () => {
      const values = this.parentValues[this.mainBinding]
      values[0]['@language'] = Language.l10nLanguage
      this.render()
    }

    return this.definition['form:label']?._ ? html`
      <label ref=${attributesDiff(this.labelAttributes)}>
        ${this.definition['form:label']._}
        <small>&nbsp;<em>
        ${languageLabel? html`${languageLabel}` : html``}
        ${this.definition['form:translatable']?._ && languageLabel ? html`<span title=${t.direct('Disable translations for this field').toString()} class="icon-button disable-language" onclick=${disableLanguage}>${fa(faTimes)}</span>` : html``}
        ${this.definition['form:translatable']?._ && !languageLabel ? html`<span title=${t.direct('Enable translations for this field').toString()} class="icon-button enable-language" onclick=${enableLanguage}>${fa(faLanguage)}</span>` : html``}
        </em></small>
      </label>
    ` : html``
  }

  async referenceLabel () {
    const uri = this.value._
    let meta
    try {
      if (uri.substr(0,4) === 'http') meta = await getUriMeta(uri)
    }
    catch(exception) {}

    if (!meta) {
      const subject = lastPart(uri).replace(/_|-/g, ' ')
      meta = { label: subject }
    }

    return html`
      <div class="reference-label">
        ${meta?.label === false ? html`<span class="reference-loading">${t`Could not load data`}</span>` : html`
          ${meta?.thumbnail ? html`<div class="image"><img src="${`//images.weserv.nl/?url=${meta?.thumbnail}&w=100&h=100`}"></div>` : ''}
          ${meta?.label ? (
            uri.substr(0,4) === 'http' ? html`<a href="${uri}" target="_blank">${meta?.label}</a>` : html`<span class="reference-text">${meta?.label}</span>`
          ) : html`<span class="reference-loading">${t`Loading...`}</span>`}
        `}
      </div>
    `
  }

}