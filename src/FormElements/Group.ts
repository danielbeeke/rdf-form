import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Group extends FormElementBase implements FormElement {

  static type: string = 'group'

  async templateItem (index, value) {
    return await Promise.all(Array.from(this.children.values())
      .map(async (formElement) => await formElement.templateWrapper(index))
    )
  }

}
