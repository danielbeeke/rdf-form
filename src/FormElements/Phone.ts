import { html } from 'uhtml'
import {RdfForm} from "../RdfForm.js";
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Phone extends FormElementBase implements FormElement {

  static type: string = 'phone'

  constructor (formElementData, rdfForm: RdfForm) {
    super(formElementData, rdfForm)
    this.translatable = false
    this.multiple = false
  }
  get label () {
    return 'Number'
  }

  templateItem (quad) {
    return html.for(quad)`
      <div class="field-item">
        <input type="phone"
        onchange="${event => this.on('change', event, quad)}"
        onkeyup="${event => this.on('keyup', event, quad)}"
        value="${quad.object.value}">
        ${this.templateItemActions(quad)}
      </div>
    `
  }
}
