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
      this.render()
    })
  }

  templateItem (quad) {
    return html.for(quad)`
      <div class="field-item inline">
        <select>
          ${this.options.map(option => quad.object.value === option ? html`
            <option selected>${option.split('#')[1]}</option>
          ` : html`
            <option>${option.split('#')[1]}</option>
          `)}
        </select>

        ${this.templateItemActions(quad)}
      </div>
    `
  }

  templateWrapper (field) {
    return html.for(field)`<div class="field">
      ${this.templateLabel()}

      ${this.data.quads.length ? html`
      <div class="field-items inline">
      ${this.data.quads.map(quad => this.templateItem(quad))}

      <div class="field-items-actions">
          ${this.translatable ? this.languageSelector(null, (event) => this.setNewLanguage(event.target.value), field) : ''}
          <button onclick="${() => this.addQuad()}"><i class="fas fa-plus"></i></button>
      </div>

      </div>
      ` : ''}


      ${this.data.children && this.data.children.length ? html`
        <div class="children">${this.data.children.map(child => child.formElement.templateWrapper(child))}</div>
      ` : ''}
    </div>`
  }


}
