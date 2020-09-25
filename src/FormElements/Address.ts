import { html } from 'uhtml'
import { OntologyRepository } from '../OntologyRepository'
import { RdfForm } from '../RdfForm'
import { FormElementData, FormElement, AddressFields } from '../Types'
import { FormElementBase } from './FormElementBase'
import { debounce } from '../Helpers'

export class Address extends FormElementBase implements FormElement {

  static type: string = 'address'
  public initiated = false

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

  init () {
    this.initiated = true
    this.fields.postalCode.formElement.addEventListener('keyup', debounce((event) => {
      const country = this.fields.country.formElement?.['countries'].find(country => country.name === this.fields.country.formElement.value)

      if (country) {
        const postalCode = this.fields.postalCode.formElement.value

        fetch(`http://api.geonames.org/postalCodeSearch?postalcode=${postalCode}&maxRows=10&type=json&username=danielbeeke&country=${country.countryCodeISO3166Alpha2}`)
          .then(response => response.json())
          .then(response => {
            console.log(response)
          })
      }
    }, 300))
  }

  templateWrapper (field: FormElementData): any {
    if (!this.initiated) this.init()

    let renderSubField = (name: string) => {
      return this.fields[name].formElement.templateWrapper(this.fields[name])
    }

    let properties = ['translatable', 'multiple', 'removable']

    for (const [fieldName, field] of Object.entries(this.fields)) {
      properties.forEach(property => {
        if (fieldName === 'type' && property === 'removable') return
        field.formElement[property] = false
      })
    }

    return html.for(field)`<div class="${'field ' + this.constructor['type'] }">
      ${this.templateLabel()}

      <div class="children">
     ${renderSubField('type')}
     <div class="row">
       ${renderSubField('country')}
       ${renderSubField('postalCode')}
     </div>

      <div class="row">
       ${renderSubField('streetAddress')}
       ${renderSubField('locality')}
      </div>

      </div>

    </div>`
  }
}
