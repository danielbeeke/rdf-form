import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { fa } from '../Helpers'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export class Dropdown extends FormElementBase implements FormElement {

  static type: string = 'dropdown'
  public options = []

  async init(): Promise<void> {
    await super.init();

    if (!this.field.optionsQuery || !this.field.optionsSource) {
      throw new Error('optionsQuery and optionsSource are needed for the field dropdown. Please improve the form definition.')
    }

    const query = this.field.optionsQuery.replace(/LANGUAGE/g, this.form.language)

    const options = await this.sparqlQuery(query, this.field.optionsSource)
    this.options = [{
      label: this.field.emptyText ? this.field.emptyText : this.form.t`- Select a value -`,
      uri: null,
      image: null
    }, ...options]
  }

  isRemovable (index) {
    return !this.field.required
  }

  async templateItem (index, value) {
    const idValue = value?.['@id'] ?? value

    return this.html`
    <select
    required="${this.isRequired(index)}"
    onchange="${event => this.on(event, index)}"
    >
        ${!this.field.required ? this.html`<option value="">${this.form.t.direct('- Select -')}</option>` : ''}
        ${this.options.map(option => option.uri === idValue ? this.html`
          <option value="${option.uri}" selected>${option.label?.[this.form.language] ?? option.label}</option>
        ` : this.html`
          <option value="${option.uri}">${option.label?.[this.form.language] ?? option.label}</option>
        `)}
    </select>
    ${fa(faCaretDown)}`
  }

}
