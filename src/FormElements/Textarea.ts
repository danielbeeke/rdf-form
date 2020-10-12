import { html } from 'uhtml'
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Textarea extends FormElementBase implements FormElement {

  static type: string = 'textarea'

  templateItem (index, value) {
    let textValue = value?.['@value'] ?? value ?? ''

    if (textValue) textValue.trim()

    return this.html`
    <textarea
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      required="${this.isRequired(index)}"
      rows="${this.field.rows}">${textValue}</textarea>`
  }
}
