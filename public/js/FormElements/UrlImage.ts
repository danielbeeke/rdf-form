import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { html } from '../vendor/uhtml.js'

export class UrlImage extends FormElementBase implements FormElement {

  static type: string = 'url-image'

  public jsonLdValueType = 'value'

  on(event, index) {
    super.on(event, index);
    if (event.type === 'change') this.render()
  }

  async templateItemFooter (index, value) {
    return value?.['@' + this.jsonLdValueType] ? this.html`<img src="${value?.['@' + this.jsonLdValueType]}" />` : ''
  }

  async templateItem (index, value, placeholder = null): Promise<typeof html | HTMLElement> {
    const textValue = value?.['@' + this.jsonLdValueType] ?? value

    return this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      placeholder="${placeholder ?? this.Field.placeholder}"
      .value="${textValue}"
      required="${this.isRequired(index)}"
    >`
  }
}
