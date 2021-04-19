import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { faTimes, faPlus } from 'https://unpkg.com/@fortawesome/free-solid-svg-icons?module'
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
    class: []
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
    const [ definition, bindings, value, parentValues, index, render, comunica, parent ] = args

    this.definition = definition
    this.bindings = bindings

    this.mainBinding = definition['form:binding']?._
    this.parentValues = parentValues
    this.value = value
    this.render = render
    this.comunica = comunica
    this.parent = parent
  }

  async on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      if (!this.value) await this.addItem()
      if (this.value) this.value[`@${this.jsonldKey}`] = event.target.value
    }
  }

  async addItem () {
    const value = { [`@${this.jsonldKey}`]: null }
    const fieldLanguages = this.parentValues ? await Language.extractUsedLanguages(this.parentValues) : []
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
      ${childTemplates}
    </div>`
  }

  addButton () {
    return html`<button type="button" class="button add" onclick="${() => {
      this.addItem()
      this.render();
    }}">
      ${fa(faPlus)}
    </button>`
  }

  removeButton () {
    return html`<button type="button" class="button remove" onclick="${() => {
      const valueArray = this.parentValues[this.definition['form:binding']?._]?.$

      if (valueArray) {
        const index = valueArray.indexOf(this.value.$)
        valueArray.splice(index, 1)  
      }

      this.render();
    }}">
      ${fa(faTimes)}
    </button>`
  }

  input () {
    const parentIsGroup = this.parent?.definition?.['form:widget']?._ === 'group'

    return html`
      <input 
        ref=${attributesDiff(this.attributes)} 
        .value=${this.value?._ ?? ''} 
        onchange=${(event) => this.on(event)}
        onkeyup=${(event) => this.on(event)}
      />

      ${parentIsGroup ? html`` : this.removeButton()}
    `
  }

  label () {
    return html`<label ref=${attributesDiff(this.labelAttributes)}>${this.definition['form:label']._}</label>`
  }

  async referenceLabel () {
    const uri = this.value._
    let meta
    try {
      meta = await getUriMeta(uri)
    }
    catch(exception) {
      const subject = lastPart(uri).replace(/_|-/g, ' ')
      meta = { label: subject }
    }

    return html`
      <div class="reference-label">
        ${meta?.label === false ? html`<span class="reference-loading">${t`Could not load data`}</span>` : html`
          ${meta?.thumbnail ? html`<div class="image"><img src="${`//images.weserv.nl/?url=${meta?.thumbnail}&w=100&h=100`}"></div>` : ''}
          ${meta?.label ? html`<a href="${uri}" target="_blank">${meta?.label}</a>` : html`<span class="reference-loading">${t`Loading...`}</span>`}
        `}
      </div>
    `
  }

}