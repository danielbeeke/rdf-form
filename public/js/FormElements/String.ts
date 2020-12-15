import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class String extends FormElementBase implements FormElement {

  static type: string = 'string'

}
