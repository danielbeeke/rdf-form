import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Mail extends FormElementBase implements FormElement {

  static type: string = 'mail'

}
