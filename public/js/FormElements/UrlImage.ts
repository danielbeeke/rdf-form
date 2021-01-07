import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class UrlImage extends FormElementBase implements FormElement {

  static type: string = 'url-image'

  public jsonLdValueType = 'value'

  on(event, index) {
    super.on(event, index);
    if (event.type === 'change') this.render()
  }

  async templateItemFooter (index, value) {
    return value?.['@value'] ? this.html`<img src="${value?.['@value']}" />` : ''
  }

}
