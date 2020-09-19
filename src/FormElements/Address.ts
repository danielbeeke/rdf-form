import { html } from 'uhtml'
import { RdfForm } from '../RdfForm'
import { FormElementData, FormElement, AddressFields } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Address extends FormElementBase implements FormElement {

  static type: string = 'address'

  private fields: AddressFields = {
    type: null,
    postalCode: null,
    country: null,
    locality: null,
    streetAddress: null
  }

  constructor (formElementData, rdfForm: RdfForm) {
    super(formElementData, rdfForm)
    this.fields.type = this.getSubformElement('http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
    this.fields.postalCode = this.getSubformElement('http://www.w3.org/2006/vcard/ns#postal-code')
    this.fields.country = this.getSubformElement('http://www.w3.org/2006/vcard/ns#country-name')
    this.fields.locality = this.getSubformElement('http://www.w3.org/2006/vcard/ns#locality')
    this.fields.streetAddress = this.getSubformElement('http://www.w3.org/2006/vcard/ns#street-address')
  }

  get description () {
    return 'The address of the subject'
  }

  templateWrapper (field: FormElementData): any {
    let renderSubField = (name: string) => {
      return this.fields[name].formElement.templateWrapper(this.fields[name])
    }

    let properties = ['translatable', 'multiple', 'removable']

    for (const [fieldName, field] of Object.entries(this.fields)) {
      properties.forEach(property => field.formElement[property] = false)
    }

    return html.for(field)`<div class="${'field ' + this.constructor['type'] }">
      ${this.templateLabel()}

      <div class="children">
     ${renderSubField('type')}
     ${renderSubField('country')}

      <div class="row">
       ${renderSubField('streetAddress')}
       ${renderSubField('postalCode')}
       ${renderSubField('locality')}
      </div>

      </div>

    </div>`
  }
}
