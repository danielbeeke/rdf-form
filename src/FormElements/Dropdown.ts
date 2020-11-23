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
        <option disabled selected value>${this.field.emptyText ? (this.field.emptyText?.[this.form.language] ?? this.field.emptyText) : this.form.t`- Select a value -`}</option>
        ${this.options.map(option => this.html`
            <option value="${option.uri}" selected="${option.uri === idValue ? true : null}">
                ${option.label?.[this.form.language] ?? option.label}
              </option>
        `)}
    </select>`
  }

}
