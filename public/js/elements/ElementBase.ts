import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { faTimes, faPlus } from 'https://unpkg.com/@fortawesome/free-solid-svg-icons?module'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'
import { getUriMeta } from '../helpers/getUriMeta'
import { t } from '../core/Language'
import { lastPart } from '../helpers/lastPart'
import { fa } from '../helpers/fa'

export class ElementBase extends EventTarget {

  protected definition: object
  protected bindings: Array<string>
  protected value: any
  protected values: any
  public parent: any
  protected jsonldKey = 'value'
  protected comunica: any
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
    const [ definition, bindings, value, index, render, comunica, parent ] = args

    this.definition = definition
    this.bindings = bindings

    const mainBinding = definition['form:binding']?._
    this.values = value ?? {}
    this.value = value ? value[mainBinding][index] : null
    this.render = render
    this.comunica = comunica
    this.parent = parent
  }

  async on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      this.value[`@${this.jsonldKey}`] = event.target.value
    }
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
      const valueArray = this.values[this.definition['form:binding']?._]?.$

      console.log(this.values)

      if (valueArray) {
        valueArray.push({})
        console.log(valueArray)
      }

      this.render();
    }}">
      ${fa(faPlus)}
    </button>`
  }

  removeButton () {
    return html`<button type="button" class="button remove" onclick="${() => {
      const valueArray = this.values[this.definition['form:binding']?._]?.$

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