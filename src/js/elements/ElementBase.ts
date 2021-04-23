import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { faTimes, faPlus, faLanguage } from '../helpers/icons'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'
import { flatMapProxy } from '../helpers/flatMapProxy'
import { t, Language } from '../core/Language'
import { lastPart } from '../helpers/lastPart'
import { isFetchable } from '../helpers/isFetchable'
import { fa } from '../helpers/fa'
import { RdfForm } from '../RdfForm'

export class ElementBase extends EventTarget {

  protected definition: object
  protected bindings: Array<string>
  protected value: any
  protected parentValues: any
  protected itemValues: any
  public parent: ElementBase | RdfForm
  protected jsonldKey = 'value'
  protected mainBinding: string = null
  public render = () => null 
  protected suggestions: Array<any> = []
  protected attributes = {
    type: 'input',
    class: [],
    disabled: null,
    readonly: null,
    placeholder: null,
    required: null,
    multiple: null,
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
    const [ definition, bindings, value, itemValues, parentValues, render, parent ] = args

    this.definition = definition
    this.bindings = bindings

    this.mainBinding = definition['form:binding']?._
    this.parentValues = parentValues
    this.itemValues = itemValues
    this.value = value
    this.render = render
    this.parent = parent

    if (this.definition['form:placeholder']?._) this.attributes.placeholder = this.definition['form:placeholder']?._
    if (this.definition['form:required']?._ === true) this.attributes.required = true
    if (this.definition['form:multiple']?._ === true) this.attributes.multiple = true
    if (this.definition['form:readonly']?._ === true) this.attributes.readonly = true
    if (this.definition['form:disabled']?._ === true) this.attributes.disabled = true
    if (this.definition['form:cssClass']?._) this.wrapperAttributes.class.push(this.definition['form:cssClass']._)
  }

  get proxy () {
    return this.form?.proxy
  }

  get form () {
    let pointer = this
    while (pointer.parent) {
      /** @ts-ignore */
      pointer = pointer.parent
    }
    return pointer instanceof RdfForm ? pointer : null
  }

  on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      if (!this.value) this.addItem()
      if (this.value) this.value[`@${this.jsonldKey}`] = event.target.value
    }
  }

  get removable () {
    if (this.definition?.['form:removable']?._ === false) return false
    const hasValue = this.value?._
    const parentIsGroup = this.parent instanceof ElementBase ? this.parent?.definition?.['form:widget']?._ === 'group' : false
    const isGroup = this.definition?.['form:widget']?._ === 'group'
    const isRequired = this.definition?.['form:required']?._
    
    return !isRequired && hasValue && !parentIsGroup || isGroup
  }

  get languages () {
    return Language.extractUsedLanguages(this.parentValues)
  }

  addItem () {
    const value = { [`@${this.jsonldKey}`]: null }
    const fieldLanguages = this.parentValues?.[this.mainBinding] ? Language.extractUsedLanguages(this.parentValues) : []
    if (fieldLanguages.length || this.definition['form:translatable']._ === 'always') value['@language'] = Language.l10nLanguage
    if (!this.parentValues[this.mainBinding]) this.parentValues[this.mainBinding] = []
    this.parentValues?.[this.mainBinding].push(value)
    this.value = value
  }

  /**
   * Start of templates
   */

  wrapper (innerTemplates: Array<typeof html> = []) {
    const type = kebabize(this.constructor.name)
    const shouldShowEmpty = this.definition['form:translatable']?._ === 'always' && !Language.l10nLanguage

    return html`
    ${!shouldShowEmpty ? html`
    <div ref=${attributesDiff(this.wrapperAttributes)} name=${kebabize(lastPart(this.definition['@id']))} type="${type}">
    ${this.label()}
    ${innerTemplates.length ? html`
      <div class="items">
        ${innerTemplates}
      </div>
    ` : ''}
      ${this.definition['form:multiple']?._ ? html`<div>${this.addButton()}</div>` : html``}
    </div>
    ` : html``}`
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

  disableLanguage () {
    const values = this.parentValues[this.mainBinding]
    if (values) {
      values.splice(1)
      delete values[0]['@language']  
    }
  }

  enableLanguage() {
    if (!this.parentValues[this.mainBinding]) this.parentValues[this.mainBinding] = this.parentValues[this.mainBinding] = []
    const values = this.parentValues[this.mainBinding]
    if (values.length) {
      values[0]['@language'] = Language.l10nLanguage
    }
    else {
      values.push({ '@language': Language.l10nLanguage })
    }
  }

  async label () {
    let languageLabel = ''

    if (this.definition['form:translatable']?._) {
      const applicableValues = this.parentValues[this.mainBinding] ? [...this.parentValues[this.mainBinding].values()]
      .filter((value) => !value['@language'] || value['@language'] === Language.l10nLanguage) : []

      const hasLanguage = this.languages.length > 0
      const language = applicableValues.map((value) => value['@language'])[0]

      if (language) {
        languageLabel = `(${Language.l10nLanguages[language]})`
      }
      else if (this.value === null) {
        languageLabel = `(${Language.l10nLanguages[Language.l10nLanguage]})`
      }
    }

    const disableLanguage = () => {
      this.disableLanguage()
      this.render()
    }

    const enableLanguage = () => {
      this.enableLanguage()
      this.render()
    }

    return this.definition['form:label']?._ ? html`
      <label ref=${attributesDiff(this.labelAttributes)}>
        ${this.definition['form:label']._}
        <small>&nbsp;<em>
        ${languageLabel? html`${languageLabel}` : html``}
        ${this.definition['form:translatable']?._ && this.definition['form:translatable']?._ !== 'always' && languageLabel ? html`<span title=${t.direct('Disable translations for this field').toString()} class="icon-button disable-language" onclick=${disableLanguage}>${fa(faTimes)}</span>` : html``}
        ${this.definition['form:translatable']?._ && this.definition['form:translatable']?._ !== 'always' && !languageLabel ? html`<span title=${t.direct('Enable translations for this field').toString()} class="icon-button enable-language" onclick=${enableLanguage}>${fa(faLanguage)}</span>` : html``}
        </em></small>
      </label>
    ` : html``
  }

  async referenceLabel (uri, meta) {
    if (!meta) {
      const subject = lastPart(uri).replace(/_|-/g, ' ')
      meta = { label: subject }
    }

    return html`
      <div class="reference-label">
        ${meta?.label === false ? html`<span class="reference-loading">${t`Could not load data`}</span>` : html`
          ${meta?.thumbnail ? html`<div class="image"><img src="${`//images.weserv.nl/?url=${meta?.thumbnail}&w=100&h=100`}"></div>` : ''}
          ${meta?.label ? (
            isFetchable(uri) ? html`<a href="${uri}" target="_blank">${meta?.label}</a>` : html`<span class="reference-text">${meta?.label}</span>`
          ) : html`<span class="reference-loading">${t`Loading...`}</span>`}
        `}
      </div>
    `
  }

}