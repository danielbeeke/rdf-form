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

    const predicate = this.data.quads[0].object?.id ?? this.data.quads[0].object?.value

    OntologyRepository.dereference(object, rdfForm.proxy).then(quads => {
      const ourSubject = quads.find(quad => [
        'http://www.w3.org/2000/01/rdf-schema#Class',
        'http://www.w3.org/2002/07/owl#Class'
      ].includes(quad.object.value) && quad.subject.value === predicate)

      if (ourSubject) {
        const className = ourSubject.object.value
        const classQuads = quads.filter(quad => quad.object.value === className && quad.subject.value.substr(0, 4) === 'http')
        this.options = classQuads.map(quad => quad.subject.value)
      }

      this.render()
    })
  }

  optionDisplay (uri) {
    if (uri.split('#').length > 1) {
      return uri.split('#')[1]
    }
    else {
      return uri.split('/').pop()
    }
  }

  templateItem (quad) {

    return html.for(quad)`
      <div class="field-item inline">
        <select class="select">
          ${this.options.map(option => quad.object.value === option ? html`
            <option selected value="${option}">${this.optionDisplay(option)}</option>
          ` : html`
            <option value="${option}">${this.optionDisplay(option)}</option>
          `)}
        </select>

        ${this.templateItemActions(quad)}
      </div>
    `
  }

  templateWrapper (field) {
    return html.for(field)`<div class="${'field ' + this.constructor['type'] }">
      ${this.templateLabel()}

      ${this.data.quads.length ? html`
      <div class="field-items inline">
      ${this.data.quads.map(quad => this.templateItem(quad))}

      <div class="field-items-actions">
          <button class="button add" onclick="${() => this.addQuad()}"><i class="fas fa-plus"></i></button>
      </div>

      </div>
      ` : ''}

      ${this.data.children && this.data.children.length ? html`
        <div class="children">${this.data.children.map(child => child.formElement.templateWrapper(child))}</div>
      ` : ''}
    </div>`
  }


}
