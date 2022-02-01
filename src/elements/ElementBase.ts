import { html } from 'uhtml/async'
import { faTimes, faPlus, faLanguage } from '../helpers/icons'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'
import { Language } from '../core/Language'
import { lastPart } from '../helpers/lastPart'
import { isFetchable } from '../helpers/isFetchable'
import { fa } from '../helpers/fa'
import { debounce } from '../helpers/debounce';

export class ElementBase extends EventTarget {

  public definition: any
  protected bindings: Array<string>
  protected value: any
  protected parentValues: any
  protected itemValues: any
  public parent: ElementBase | any
  protected jsonldKey = 'value'
  protected mainBinding: string
  public render = () => null 
  protected suggestions: Array<any> = []
  protected index: number
  protected debouncedRender: any
  protected children = []
  protected attributes: {
    type: string,
    class: [],
    disabled: null | boolean,
    readonly: null | boolean,
    placeholder: null | boolean,
    required: null | boolean,
    multiple: null | boolean,
    rows: null | boolean | number,
    open: null | boolean,
  } = {
    type: 'input',
    class: [],
    disabled: null,
    readonly: null,
    placeholder: null,
    required: null,
    multiple: null,
    rows: null,
    open: null,
  }

  public wrapperAttributes: {
    open: boolean,
    class: Array<string>
  } = {
    open: false,
    class: ['form-element']
  }

  protected labelAttributes: {
    class: Array<string>
  } = {
    class: ['label']
  }
  
  protected options: Array<any> = []

  constructor (...args: any[]) {
    super()
    const [ definition, bindings, value, itemValues, parentValues, render, parent, index, children ] = args

    this.definition = definition
    this.bindings = bindings

    this.mainBinding = definition['form:binding']?._
    this.parentValues = parentValues
    this.itemValues = itemValues
    this.value = value
    this.render = render
    this.parent = parent
    this.index = index
    this.children = children

    this.debouncedRender = debounce(this.render.bind(this), 300)

    if (this.definition['form:jsonLdKey']) {
      this.jsonldKey = this.definition['form:jsonLdKey']._
    }

    if (this.definition['form:placeholder']?._) this.attributes.placeholder = this.definition['form:placeholder']?._
    if (this.definition['form:required']?._ === true) this.attributes.required = true
    if (this.definition['form:multiple']?._ === true) this.attributes.multiple = true
    if (this.definition['form:readonly']?._ === true) this.attributes.readonly = true
    if (this.definition['form:disabled']?._ === true) this.attributes.disabled = true
    if (this.definition['form:open']?._ !== undefined) this.wrapperAttributes.open = this.definition['form:open']._
    if (this.definition['form:rows']?._ !== undefined) this.attributes.rows = parseInt(this.definition['form:rows']._)
    if (this.definition['form:cssClass']?._) this.wrapperAttributes.class.push(this.definition['form:cssClass']._)
    if (!this.definition['form:label']?._) this.wrapperAttributes.class.push('no-label')

    if (this.definition['form:option']) {
      this.options.push(...this.definition['form:option'].map(option => {
        return {
          label: option['form:label']?._,
          image: option['form:image']?._,
          uri: option['form:value']?._,
          jsonldKey: (Object.keys(option['form:value'][0])[0]).substr(1),
        }
      }))
    }

  }

  get proxy () {
    return this.form?.proxy ?? ''
  }

  get t () {
    return this.form?.t
  }

  get form (): HTMLElement & { t: any, proxy: string, formDefinition: any, renderer: any } {
    let pointer = this
    while (pointer.parent) {
      /** @ts-ignore */
      pointer = pointer.parent
    }

    /** @ts-ignore */
    return pointer.registry ? pointer : null
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
    return Language.extractUsedLanguages(this.parentValues?.[this.mainBinding])
  }

  addItem () {
    if (this.bindings.length > 1) {
      if (!this.parentValues[this.mainBinding]) this.parentValues[this.mainBinding] = []
      const emptyObject = {}
      for (const binding of this.bindings) {
        emptyObject[binding] = []
      }
      emptyObject[this.mainBinding].push({})
      this.parentValues.push(emptyObject)
      this.itemValues = emptyObject
      this.value = emptyObject[this.mainBinding][0]
    } 
    else if (this.definition['form:widget']?._ === 'group') {
      if (!this.parentValues[this.mainBinding]) {
        this.parentValues[this.mainBinding] = [{'@list': [{}]}]
      }

      const firstItem = this.parentValues[this.mainBinding]?.[0]?.$
      const clone = JSON.parse(JSON.stringify(firstItem))
  
      for (const [_field, values] of Object.entries(clone)) {
        /** @ts-ignore */
        if (values?.[0]['@id']) values[0]['@id'] = null
        /** @ts-ignore */
        if (values?.[0]['@value']) values[0]['@value'] = ''
        /** @ts-ignore */
        if (values?.[0]['@language']) values[0]['@value'] = Language.l10nLanguage
      }
  
      this.parentValues?.[this.mainBinding].push(clone)
      this.value = clone
    }
    else {
      const value = { [`@${this.jsonldKey}`]: null }
      /** @ts-ignore */
      if (this.languages.length || this.definition['form:translatable']?._ === 'always') value['@language'] = Language.l10nLanguage
      if (!this.parentValues?.[this.mainBinding]) this.parentValues[this.mainBinding] = []
      this.parentValues?.[this.mainBinding].push(value)
      this.value = value 
    }
  }

  removeItem () {
    if (this.bindings.length > 1) {
      const valueArray = this.parentValues.$

      if (valueArray) {
        const index = valueArray.indexOf(this.itemValues.$)
        valueArray.splice(index, 1)  
      }
    } 
    else {
      const valueArray = this.parentValues[this.definition['form:binding']?._]?.$

      if (valueArray) {
        const index = valueArray.indexOf(this.value.$)
        valueArray.splice(index, 1)  
      }
    }
  }

  /**
   * Start of templates
   */
   wrapperDisplay (innerTemplates: Array<typeof html> = []) {
    return this.wrapper(innerTemplates, true)
  }
  
  itemDisplay (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
      ${this.valueDisplay()}
      ${childTemplates}
    </div>`
  }

  valueDisplay () {
    return html`${this.value?._}`
  }

  async wrapper (innerTemplates: Array<typeof html> = [], isDisplayOnly = false) {
    const type = kebabize(this.constructor.name)
    const shouldShowEmpty = this.definition['form:translatable']?._ === 'always' && !Language.l10nLanguage

    return html`
    ${!shouldShowEmpty && (!isDisplayOnly || innerTemplates.length > 0) ? html`
    <div ref=${attributesDiff(this.wrapperAttributes)} name=${kebabize(lastPart(this.definition['@id']))} type="${type}">
    ${this.label()}
    ${innerTemplates.length ? html`
      <div class="items">
        ${this.description()}
        ${innerTemplates}
      </div>
    ` : ''}
      ${this.definition['form:multiple']?._ && !isDisplayOnly ? html`<div>${this.addButton()}</div>` : html``}
    </div>
    ` : html``}`
  }

  description () {
    return this.definition['form:description']?._ ? html`<p class="description">${this.definition['form:description']?._}</p>` : null
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
      this.removeItem()
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

    /** @ts-ignore */
    const isDisplayOnly = this.form?.getAttribute('display')

    if (this.definition['form:translatable']?._) {
      const applicableValues = this.parentValues?.[this.mainBinding] ? [...this.parentValues[this.mainBinding].values()]
      .filter((value) => !value['@language'] || value['@language'] === Language.l10nLanguage) : []

      const language = applicableValues.map((value) => value['@language'])[0]

      if (language) {
        languageLabel = `(${Language.l10nLanguages[language]})`
      }
      else if (applicableValues.length === 0 && this.definition['form:translatable']?._ === 'always') {
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
        ${this.definition['form:label']._}${isDisplayOnly ? ':' : ''}
        <small>&nbsp;<em>
        ${languageLabel && !isDisplayOnly ? html`${languageLabel}` : html``}
        ${this.languages.length && this.definition['form:translatable']?._ && this.definition['form:translatable']?._ !== 'always' && languageLabel ? html`<span title=${this.t.direct('Disable translations for this field').toString()} class="icon-button disable-language" onclick=${disableLanguage}>${fa(faTimes)}</span>` : html``}
        ${this.languages.length && this.definition['form:translatable']?._ && this.definition['form:translatable']?._ !== 'always' && !languageLabel ? html`<span title=${this.t.direct('Enable translations for this field').toString()} class="icon-button enable-language" onclick=${enableLanguage}>${fa(faLanguage)}</span>` : html``}
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
        ${meta?.label === false ? html`<span class="reference-loading" title=${this.t.direct(`Could not load data`).toString()}>${this.value?._}</span>` : html`
          ${meta?.thumbnail ? html`<div class="image"><img src="${`//images.weserv.nl/?url=${meta?.thumbnail}&default=${meta?.thumbnail}&w=100&h=100`}"></div>` : ''}
          ${meta?.label ? (
            isFetchable(uri) ? html`<a href="${uri}" target="_blank">${meta?.label}</a>` : html`<span class="reference-text">${meta?.label}</span>`
          ) : html`<span class="reference-loading">${this.t`Loading...`}</span>`}
        `}
      </div>
    `
  }

}