import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import {t} from "../LanguageService";

export class Group extends FormElementBase implements FormElement {

  static type: string = 'group'

  async init () {
    // console.log(this)
  }

  async templateItem () {
    return null
  }

}
