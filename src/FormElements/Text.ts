import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Text extends FormElementBase implements FormElement {

  static type: string = 'text'

}