import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Subject extends FormElementBase implements FormElement {

  static type: string = 'subject'

  public inputField: any

  async init () {
    this.inputField = Array.from(this.form.formElements.values())
      .find(formElement => formElement.field.binding === this.Field.input)

    this.inputField.addEventListener('keyup', () => {
      this.transformValue()
      this.render()
    })
    this.transformValue()
  }

  transformValue () {
    let value = this.inputField.values[0]?.['@value'] ?? this.inputField.values[0] ?? ''
    value = value
      .replace(/\s(.)/g, (string) => string.toUpperCase())
      .replace(/\s/g, '')
      .replace(/^(.)/, (string) => string.toLowerCase())
    this.values = [value]
  }

  templateItem (index, value) {
    const textValue = value?.['@value'] ?? value
    return this.html.for(value)`<input readonly type="text" value="${textValue}" required="${this.isRequired(index)}">`
  }

  templateWrapper () {
    return this.html.for(this.Values)`
    <div classy:wrapper="form-element">

      ${this.templateLabel()}

      ${this.html`
        <div classy:items="form-element-items">
          <div classy:item="form-element-item">
            ${this.templateItem(0, this.values[0])}
          </div>
        </div>
      `}

      ${this.templateDescription()}
    </div>`
  }

}
