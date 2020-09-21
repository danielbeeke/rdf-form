import { html } from 'uhtml'
import { OntologyRepository } from '../OntologyRepository'
import { RdfForm } from '../RdfForm'
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Country extends FormElementBase implements FormElement {

  static type: string = 'country'
  public countries: Array<object> = []

  constructor (formElementData, rdfForm: RdfForm) {
    super(formElementData, rdfForm)

    OntologyRepository.dereference('https://www.w3.org/Consortium/Offices/Presentations/RDFTutorial/rdfs/Countries.owl', this.form.proxy).then(quads => {
      const countries = quads
        .filter(quad => quad.predicate.value === 'http://www.bpiresearch.com/BPMO/2004/03/03/cdl/Countries#countryCodeISO3166Alpha2')

      for (const countryQuad of countries) {
        let countryObject = {
          name: null
        }
        countryObject['subject'] = countryQuad.subject.value;
        const countryQuads = quads.filter(quad => quad.subject.value === countryQuad.subject.value)
        for (const innerQuad of countryQuads) {
          countryObject[innerQuad.predicate.value.split('#')[1]] = innerQuad.object.value
        }

        const countryMeta = quads.find(quad => quad.subject.value === countryObject['referencesCountry'] && quad.predicate.value === 'http://www.bpiresearch.com/BPMO/2004/03/03/cdl/Countries#nameEnglish')
        countryObject.name = countryMeta.object.value

        this.countries.push(countryObject)
      }

      this.countries.sort((a, b) => {
        if (a['name'] > b['name']) return 1;
        if (b['name'] > a['name']) return -1;

        return 0;
      })

      this.render()
    })
  }

  templateItem (quad) {

    return html.for(quad)`
      <div class="field-item">
        <input list="countries" type="text" value="${quad.object.value}">
        ${this.countries.length > 0 ? html`
        <datalist id="countries">
            ${this.countries.map(country => html`<option value="${country['name']}">`)}
        </datalist>
        ` : ''}

        ${this.templateItemActions(quad)}
      </div>
    `
  }

}
