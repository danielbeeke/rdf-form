import { ElementBase } from './ElementBase'
import { sparqlQueryToList } from '../helpers/sparqlQueryToList'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { t } from '../core/Language'
import { attributesDiff } from '../helpers/attributesDiff'

export class Dropdown extends ElementBase {
  
  protected options: Array<any> = []

  constructor (...args) {
    super(...args)

    if (this.definition['form:option']) {
      this.options.push(...this.definition['form:option'])
    }

    if (!this.options.length) {
      if (!this.definition['form:optionsQuery']?._ || !this.definition['form:optionsSource']?._) {
        throw new Error('optionsQuery and optionsSource are needed for the field dropdown. Please improve the form definition.')
      }

      // sparqlQueryToList(this.definition['form:optionsQuery']._, this.definition['form:optionsSource']._, this.comunica).then(options => {
      //   this.options = options
      // })
    }
  }

  input () {
    return html`
    <select
      ref=${attributesDiff(this.attributes)} 
      onchange=${(event) => this.on(event)}
    >
        ${!this.value?._ && !this.definition['form:multiple']?._ ? html`<option disabled selected value>${t`- Select a value -`}</option>` : ''}
        ${this.options.map(option => {
          return html`
          <option value="${option['form:value']._}" .selected="${option['form:value']._ === this.value?._ ? true : null}">
              ${option['form:label']._}
            </option>
          `})}
    </select>`
  }

}