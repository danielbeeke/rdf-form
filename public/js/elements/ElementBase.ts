import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'

export class ElementBase extends EventTarget {

  protected definition: object
  protected value: any
  protected jsonldKey = 'value'
  protected attributes = {
    disabled: false,
    readonly: false,
    type: 'input',
    class: []
  }

  protected wrapperAttributes = {
    open: false,
    class: []
  }

  constructor (...args: any[]) {
    super()
    const [ definition, value ] = args

    this.definition = definition
    this.value = value
  }

  on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      this.value[`@${this.jsonldKey}`] = event.target.value
    }
  }

  wrapper (innerTemplates: Array<typeof html> = []) {
    const type = kebabize(this.constructor.name)
    return html`
    <div type="${type}">
      ${this.label()}
      ${innerTemplates.length ? html`
        <div class="inner">
          ${innerTemplates}
        </div>
      ` : ''}
    </div>`
  }

  item (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
      ${this.input()}

      ${childTemplates.length ? html`
      <div class="children">
        ${childTemplates}
      </div>
    ` : ''}

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
    return html`<label>${this.definition['form:label']._}</label>`
  }

}