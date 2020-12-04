import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import {t} from "../LanguageService";

export class Group extends FormElementBase implements FormElement {

  static type: string = 'group'

  async templateItem (index, value) {
    return this.html`
      ${await Promise.all(Array.from(this.children.values())
        .map(async (formElement) => await formElement.templateWrapper(index))
      )}
    `
  }

}
