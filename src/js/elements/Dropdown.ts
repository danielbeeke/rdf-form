import { ElementBase } from './ElementBase'
import { sparqlQueryToList } from '../helpers/sparqlQueryToList'
import { html } from 'uhtml/async'
import { Language, t } from '../core/Language'
import { attributesDiff } from '../helpers/attributesDiff'

export class Dropdown extends ElementBase {
  
  protected options: Array<any> = []

  constructor (...args) {
    super(...args)

    if (this.definition['form:option']) {
      this.options.push(...this.definition['form:option'].map(option => {
        return {
          label: option['form:label']?._,
          image: option['form:image']?._,
          uri: option['form:value']?._
        }
      }))
    }

    if (!this.options.length) {
      if (!this.definition['form:optionsQuery']?._ || !this.definition['form:optionsSource']?._) {
        throw new Error('optionsQuery and optionsSource are needed for the field dropdown. Please improve the form definition.')
      }
    }
  }

  item (childTemplates: Array<typeof html> = []) {
    return this.definition['form:multiple']?._ !== true || this.index < 1 ? super.item(childTemplates) : html``
  }

  on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      const selectedValues = [...event.target.options].filter(option => option.selected).map(option => {
        return {
          ['@' + this.jsonldKey]: option.value
        }
      })
      if (!this.parentValues[this.mainBinding]) this.parentValues[this.mainBinding] = []
      this.parentValues[this.mainBinding].splice(0)
      this.parentValues[this.mainBinding].push(...selectedValues)
    }
  }

  async input () {
    if (!this.options.length && this.definition['form:optionsQuery']?._ && this.definition['form:optionsSource']?._) {
      this.options = await sparqlQueryToList(this.definition['form:optionsQuery']._, this.definition['form:optionsSource']._)
    }

    const selectedValues = this.parentValues?.[this.mainBinding]?.map(option => option['@' + this.jsonldKey]) ?? []

    return html`
    <select
      ref=${attributesDiff(this.attributes)} 
      onchange=${(event) => this.on(event)}
    >
        ${!this.value?._ && !this.definition['form:multiple']?._ ? html`<option disabled selected value>${t`- Select a value -`}</option>` : ''}

        ${this.options.map(option => {
          return html`
          <option value="${option.uri}" .selected="${selectedValues.includes(option.uri) ? true : null}">
              ${option.label[Language.uiLanguage] ?? option.label}
            </option>
          `})}
    </select>`
  }

  addButton () {
    return html``
  }


}