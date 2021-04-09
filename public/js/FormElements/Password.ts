import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Password extends FormElementBase implements FormElement {

  static type: string = 'password'

  private password: string = ''
  private passwordConfirm: string = ''
  private hasInitialValue: boolean

  async init(): Promise<any> {
    super.init();
    this.hasInitialValue = !!this.Values.getValue()
  }

  isRequired (index) {
    return this.hasInitialValue ? null : (index === 0 && this.Field.required ? true : null)
  }

  async templateItem (index, value, placeholder = null) {
    const textValue = ''

    return this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.password = event.target.value}"
      type="password"
      placeholder="${placeholder ?? this.Field.placeholder}"
      .value="${textValue}"
      autocomplete="off"
      required="${this.isRequired(index)}"
    >

    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.passwordConfirm = event.target.value}"
      type="password"
      placeholder="${placeholder ?? this.Field.placeholder}"
      .value="${textValue}"
      autocomplete="off"
      required="${this.isRequired(index)}"
    >
`
  }

  on (event, index) {
    if (['keyup', 'change'].includes(event.type)) {
      this.Values.setValue(this.password === this.passwordConfirm ? this.password : '', index)
    }

    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }

  async serialize (jsonLd) {
    if (!this.password) return null
    return await super.serialize(jsonLd)
  }

}
