import {dom, library } from '@fortawesome/fontawesome-svg-core'
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import {debounce, fa} from '../Helpers'
import { faTimes, faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

dom.watch()
library.add(faTimes, faPencilAlt, faCheck)

export class Reference extends FormElementBase implements FormElement {

  static type: string = 'reference'

  async init(): Promise<void> {
    await super.init();

    this.addEventListener('keyup', debounce(async (event: any) => {
      const value = event.detail?.originalEvent?.originalTarget?.value

      if (value && value.substr(0, 4) !== 'http') {
        this.searchSuggestions = []
        this.field.autoCompleteQuery ? await this.prepareSparqlQuery(value) : await this.dbpediaSuggestions(value)
        this.render()
      }
    }, 400))

    this.form.addEventListener('language-change', () => {
      this.updateMetas().then(() => this.render())
    })

    this.addEventListener('change', event => {
      this.updateMetas().then(() => this.render())
    })

    this.updateMetas().then(() => this.render())
  }

  /**
   * This template has a couple of states:
   *
   * - Showing default search suggestions
   * - Searching
   * - Empty state
   *
   * @param index
   * @param value
   */
  async templateItem (index, value) {
    const textValue = value?.['@id'] ?? ''
    const meta = this.metas.get(textValue)

    return meta && !this.expanded.get(index) ? this.html`
      ${await this.templateReferenceLabel(meta)}
      <button class="button" onclick="${() => { this.expanded.set(index, true); this.render() }}">
        ${fa(faPencilAlt)}
      </button>
    ` : this.html`
      ${await super.templateItem(index, textValue)}
      <button class="button" onclick="${() => { this.expanded.set(index, false); this.render() }}">
        ${fa(faCheck)}
      </button>
      ${this.searchSuggestions.length ? this.html`
      <ul classy:searchSuggestions="search-suggestions">
        ${this.searchSuggestions.map(suggestion => this.html`
        <li classy:searchSuggestion="search-suggestion" onclick="${async () => {
          await this.selectSuggestion(suggestion.uri, index); this.render()
        }}">
          ${suggestion.image ? this.html`<img src="${suggestion.image}">` : ''}
          <span>${suggestion.label}</span>
        </li>`)}
      </ul>
      ` : ''}
    `
  }

}
