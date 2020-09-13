import {html} from "uhtml";
import {RdfForm} from "../RdfForm.js";
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Type extends FormElementBase implements FormElement {

  static type: string = 'type'

  constructor (formElementData, rdfForm: RdfForm) {
    super(formElementData, rdfForm);
    const object = this.data.quads[0].object?.id ?? this.data.quads[0].object?.value
    console.log(object)
  }


}
