import { ElementBase } from './ElementBase'
import { sparqlQueryToList } from '../helpers/sparqlQueryToList'
import { html } from 'uhtml/async'
import { Language, t } from '../core/Language'
import { attributesDiff } from '../helpers/attributesDiff'
import { onlyUnique } from '../helpers/onlyUnique'
import { RdfForm } from '../RdfForm'

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

  removeButton () {
    const isMultiple = this.definition['form:multiple']?._
    return isMultiple ? null : super.removeButton()
  }

  item (childTemplates: Array<typeof html> = []) {
    return this.definition['form:multiple']?._ !== true || this.index < 1 ? super.item(childTemplates) : html``
  }

  on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      const selectedItems = event.target.options ? [...event.target.options].filter(option => option.selected) : [...event.target.parentElement.parentElement.querySelectorAll(':checked')]
      const selectedValues = selectedItems.map(option => {
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
      const proxy = this.form.getAttribute('proxy') ?? ''
      const source = this.definition['form:optionsSourceType']?._ ? {
        value: this.definition['form:optionsSource']._, type: this.definition['form:optionsSourceType']._
      } : this.definition['form:optionsSource']._
      this.options = await sparqlQueryToList(this.definition['form:optionsQuery']._, source, proxy)
    }

    const selectedValues = this.parentValues?.[this.mainBinding]?.map(option => option['@' + this.jsonldKey]) ?? []

    const isMultiple = this.definition['form:multiple']?._

    const hasGroups = this.options.every(item => item?.group)
    const groups = hasGroups ? this.options.map(item => item?.group).filter(onlyUnique).sort() : []

    const createGroup = (groupName) => {
      const options = this.options.filter(option => option.group === groupName)
      return html`
      <h3>${groupName}</h3>
      ${options.map(createCheckbox)}
      `
    }

    const createCheckbox = (option) => html`
    <label class="checkbox-label">
      <input type="checkbox" onchange=${(event) => this.on(event)} value="${option.uri}" .checked="${selectedValues.includes(option.uri) ? true : null}" />
      ${option?.label?.[Language.uiLanguage] ?? option?.label ?? ''}
    </label>
    `

    return isMultiple ? (
      hasGroups ? html`${groups.map(createGroup)}` : html`${this.options.map(createCheckbox)}`
    ) : html`
    <select
      ref=${attributesDiff(this.attributes)} 
      onchange=${(event) => this.on(event)}
    >
        ${!this.value?._ && !this.definition['form:multiple']?._ ? html`<option disabled selected value>${t`- Select a value -`}</option>` : ''}

        ${this.options.map(option => {
          return html`
          <option value="${option.uri}" .selected="${selectedValues.includes(option.uri) ? true : null}">
              ${option?.label?.[Language.uiLanguage] ?? option?.label ?? ''}
            </option>
          `})}
    </select>`
  }

  addButton () {
    return html``
  }

}