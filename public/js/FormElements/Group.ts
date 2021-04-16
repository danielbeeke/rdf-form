import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Group extends FormElementBase implements FormElement {

  static type: string = 'group'

  isRemovable (index) {
    return true
  }


  async init () {
    // debugger
    // console.log(this.Values.getValue())
  }

  async templateItem (index, value) {
    const childFormElements = Array.from(this.children.values())
    return await Promise.all(childFormElements.map(async (formElement, innerIndex) => {
      formElement.Values.setGroupItemIndex(index)
      const itemTemplate = await formElement.templateWrapper(index)
      formElement.Values.setGroupItemIndex(null)
      return this.html`${itemTemplate}`
    })
    )
  }

}
