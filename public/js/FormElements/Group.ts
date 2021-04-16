import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Group extends FormElementBase implements FormElement {

  static type: string = 'group'

  isRemovable (index) {
    return true
  }

  async templateItem (index, value) {
    const childFormElements = Array.from(this.children.values())
    const returnValues = await Promise.all(childFormElements.map(async (formElement, innerIndex) => {
      formElement.Values.itemValues = this.Values._parentValues[this.Values.defaultBinding]?.[index]
      const itemTemplate = await formElement.templateWrapper(index)
      return this.html`${itemTemplate}`  
    }))
    return returnValues
  }

}
