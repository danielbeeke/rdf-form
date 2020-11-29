import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { sparqlQueryToList } from '../Helpers'
import { Language, t } from '../LanguageService'

export class Dropdown extends FormElementBase implements FormElement {

  static type: string = 'dropdown'
  public options = []

  async init(): Promise<void> {
    await super.init();

    if (!this.Field.optionsQuery || !this.Field.optionsSource) {
      throw new Error('optionsQuery and optionsSource are needed for the field dropdown. Please improve the form definition.')
    }

    this.options = await sparqlQueryToList(this.Field.optionsQuery, this.Field.optionsSource, this.form.proxy)
  }

  isRemovable (index) {
    return !this.Field.required
  }

  async templateItem (index, value) {
    const idValue = value?.['@id'] ?? value

    return this.html`
    <select
    required="${this.isRequired(index)}"
    onchange="${event => this.on(event, index)}"
    >
        <option disabled selected value>${this.Field.emptyText ? (this.Field.emptyText?.[Language.current] ?? this.Field.emptyText) : t`- Select a value -`}</option>
        ${this.options.map(option => this.html`
            <option value="${option.uri}" selected="${option.uri === idValue ? true : null}">
                ${option.label?.[Language.current] ?? option.label}
              </option>
        `)}
    </select>`
  }

}
