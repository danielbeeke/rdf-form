import { html } from 'uhtml'
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Textarea extends FormElementBase implements FormElement {

  static type: string = 'textarea'

  templateItem (index, value) {
    const textValue = value?.['@value'] ?? value
    return html`<textarea required="${this.isRequired(index)}">${textValue.trim()}</textarea>`
  }
}
