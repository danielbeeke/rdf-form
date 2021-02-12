import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { sparqlQueryToList } from '../Helpers'
import { t, Language} from '../LanguageService'

export class Dropdown extends FormElementBase implements FormElement {

  static type: string = 'dropdown'
  public options = []

  async init(): Promise<void> {
    await super.init();

    if (this.Field.option) {
      for (const option of this.Field.option) {
        const valueItem = option[this.Field.prefix.toString() + 'value'][0]
        const value = valueItem?.['@' + this.jsonLdValueType]

        const labels = {}
        for (const label of option[this.Field.prefix.toString() + 'label']) {
          labels[label?.['@language'] ?? 'und'] = label['@value']
        }

        this.options.push({
          uri: value,
          label: labels
        })
      }
    }

    if (!this.options.length) {
      if (!this.Field.optionsQuery.toString() || !this.Field.optionsSource.toString()) {
        throw new Error('optionsQuery and optionsSource are needed for the field dropdown. Please improve the form definition.')
      }

      this.options = await sparqlQueryToList(this.Field.optionsQuery, this.Field.optionsSource, this.comunica)
    }
  }

  isRemovable (index) {
    return !this.Field.required
  }

  on (event, index) {
    if (['keyup', 'change'].includes(event.type)) {
      const value = this.Values.get(index)
      value['@' + this.jsonLdValueType] = event?.target?.value
      this.Values.set(value, index)
    }

    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }

  async templateItem (index, value) {
    const idValue = value?.['@' + this.jsonLdValueType] ?? value

    return this.html`
    <select
    required="${this.isRequired(index)}"
    onchange="${event => this.on(event, index)}"
    >
        ${!idValue ? this.html`<option disabled selected value>${this.Field.emptyText.toString() ? this.Field.emptyText.toString() : t`- Select a value -`}</option>` : this.html``}
        ${this.options.map(option => this.html`
            <option value="${option.uri}" selected="${option.uri === idValue ? true : null}">
                ${option.label?.[Language.current] ?? option.label?.['und'] ?? option.label}
              </option>
        `)}
    </select>`
  }

}
