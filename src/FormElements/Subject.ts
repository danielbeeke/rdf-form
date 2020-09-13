import {html} from "uhtml";
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Subject extends FormElementBase implements FormElement {

  static type: string = 'subject'


  templateWrapper (field) {
    return html`<div class="field">
      ${this.templateLabel()}

      ${field.children && field.children.length ? html`
        <div class="children">${field.children.map(child => child.formElement.templateWrapper(child))}</div>
      ` : ''}
    </div>`
  }

}
