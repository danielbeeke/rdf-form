import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Group extends FormElementBase implements FormElement {

  static type: string = 'group'

  isRemovable (index) {
    return true
  }

  async templateItem (index, value) {
    const childFormElements = Array.from(this.children.values())
    return await Promise.all(childFormElements.map(async (formElement, innerIndex) => {
      const itemTemplate = await formElement.templateWrapper(index)
      return this.html`${itemTemplate}`
    })
    )
  }

}
