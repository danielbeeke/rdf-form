import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Url extends FormElementBase implements FormElement {

  static type: string = 'url'

}
