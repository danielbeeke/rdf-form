import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { t, Language} from '../LanguageService'
import { sparqlQueryToList } from '../helpers/sparqlQueryToList'

export class Dropdown extends FormElementBase implements FormElement {

  static type: string = 'dropdown'
  public options = []
  public jsonLdValueType: string = 'id'

  async init(): Promise<void> {
    await super.init();

    if (this.Field.option) {
      this.options.push(...this.Field.option)
    }

    if (!this.options.length) {
      if (!this.Field.optionsQuery || !this.Field.optionsSource) {
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
      this.Values.setValue(event?.target?.value, index)
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
    multiple="${this.Field.multiple ? true : null}"
    onchange="${event => this.on(event, index)}"
    >
        ${!idValue && !this.Field.multiple ? this.html`<option disabled selected value>${this.Field.emptyText ? this.Field.emptyText : t`- Select a value -`}</option>` : this.html``}
        ${this.options.map(option => this.html`
            <option value="${option.uri}" .selected="${option.uri === idValue ? true : null}">
                ${option.label?.[Language.current] ?? option.label?.['und'] ?? option.label}
              </option>
        `)}
    </select>`
  }

  async templateActions (actionsObject) {
    delete actionsObject['addItem']

    const actions = Object.values(actionsObject)

    return this.html`
      ${actions.length ? this.html`
      <div class="actions">
        ${actions}
      </div>
      ` : ''}
    `
  }
}
