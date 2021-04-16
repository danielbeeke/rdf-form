import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Number extends FormElementBase implements FormElement {

  static type: string = 'number'

  on (event, index) {
    if (['keyup', 'change'].includes(event.type)) {
      this.Values.setValue(parseInt(event?.target?.value), index)
    }

    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }

  async templateItem (index, value, placeholder = null) {
    const itemValue = value?.['@value'] ?? value

    return this.html`
    <input
      type="number"
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      placeholder="${placeholder ?? this.Field.placeholder}"
      .value="${itemValue}"
      required="${this.isRequired(index)}"
    >`
  }
}
