import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'

export class ElementBase extends EventTarget {

  protected definition: object
  protected bindings: Array<string>
  protected value: any
  protected values: any
  protected jsonldKey = 'value'
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
    const [ definition, bindings, value, index ] = args

    this.definition = definition
    this.bindings = bindings

    const mainBinding = definition['form:binding']?._
    this.values = value ?? {}
    this.value = value ? value[mainBinding][index] : null
  }

  async on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      this.value[`@${this.jsonldKey}`] = event.target.value
    }
  }

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
    </div>`
  }

  item (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
      ${this.input()}
      ${childTemplates}
    </div>`
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

  label () {
    return html`<label ref=${attributesDiff(this.labelAttributes)}>${this.definition['form:label']._}</label>`
  }

}