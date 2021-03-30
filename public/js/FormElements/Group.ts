import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Group extends FormElementBase implements FormElement {

  static type: string = 'group'

  isRemovable (index) {
    return true
  }

  async templateItem (index, value) {
    const children = Array.from(this.children.values())
    return await Promise.all(children.map(async (formElement, innerIndex) => this.html`
      ${await formElement.templateWrapper(index)}
    `)
    )
  }

}
