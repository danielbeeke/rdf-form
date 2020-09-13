import {html} from "uhtml";
import { RdfForm } from '../RdfForm';
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { OntologyRepository } from '../OntologyRepository'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

dom.watch()
library.add(faPencilAlt, faCheck, faTimes)

export class Type extends FormElementBase implements FormElement {

  static type: string = 'type'
  private options: Array<string> = []
  private collapsed = new Map()

  constructor (formElementData, rdfForm: RdfForm) {
    super(formElementData, rdfForm);
    const object = this.data.quads[0].object?.id ?? this.data.quads[0].object?.value

    for (const quad of this.data.quads) {
      this.collapsed.set(quad, true)
    }

    OntologyRepository.dereference(object, rdfForm.proxy).then(quads => {
      const classQuads = quads.filter(quad => quad.object.value === 'http://www.w3.org/2002/07/owl#Class' && quad.subject.value.substr(0, 4) === 'http')
      this.options = classQuads.map(quad => quad.subject.value)
    })
  }


  templateItem (quad) {
    return html`
      <div class="field-item">
        <strong>${quad.object.value.split('#')[1].toLowerCase()}</strong>
        ${!this.collapsed.get(quad) ? html`<input type="text" value="${quad.object.value}">` : ''}
        <button onclick="${() => { this.collapsed.set(quad, !this.collapsed.get(quad)); this.render() }}">
            ${this.collapsed.get(quad) ? html`<span><i class="fas fa-pencil-alt"></i></span>` : html`<span><i class="fas fa-check"></i></span>`}
        </button>

        ${this.templateItemActions(quad)}
      </div>
    `
  }

  templateWrapper (field) {
    return html`<div class="field">
      ${field.quads.map(quad => this.templateItem(quad))}
    </div>`
  }

}
