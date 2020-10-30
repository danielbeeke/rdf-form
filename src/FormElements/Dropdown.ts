import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Dropdown extends FormElementBase implements FormElement {

  static type: string = 'dropdown'
  public options = []

  async init(): Promise<void> {
    await super.init();

    if (!this.field.optionsQuery || !this.field.optionsSource) {
      throw new Error('optionsQuery and optionsSource are needed for the field dropdown. Please improve the form definition.')
    }

    const query = this.field.optionsQuery.replace(/LANGUAGE/g, this.form.language)
    this.options = await this.sparqlQuery(query, this.field.optionsSource)
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
          <option value="${option.uri}" selected>${option.label}</option>
        ` : this.html`
          <option value="${option.uri}">${option.label}</option>
        `)}
    </select>`
  }

}
