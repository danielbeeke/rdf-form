import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import {debounce, fa, searchSuggestionsSparqlQuery, dbpediaSuggestions, sparqlQueryToList } from '../Helpers'
import { faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import { t } from '../LanguageService'

export class Reference extends FormElementBase implements FormElement {

  static type: string = 'reference'
  public ourTemplateRemoveButton: any

  async init(): Promise<void> {
    await super.init();

    this.ourTemplateRemoveButton = this.templateRemoveButton
    /** @ts-ignore */
    this.templateRemoveButton = () => {}

    this.addEventListener('keyup', debounce(async (event: any) => {
      const value = event.detail?.value
      const index = event.detail?.index

      if (value && value.substr(0, 4) !== 'http') {
        this.isLoading.set(index, true)
        this.searchSuggestions.set(index, [])
        this.render();

        const { query, source } = this.Field.autoCompleteQuery ?
            searchSuggestionsSparqlQuery(this.Field.autoCompleteQuery, this.Field.autoCompleteSource, value) :
            dbpediaSuggestions(value)

        sparqlQueryToList(query, source, this.form.proxy).then(searchSuggestions => {
          searchSuggestions.push({
            label: t`Add <strong>${{searchTerm: value}}</strong> as text without reference.`,
            value: value
          })

          this.searchSuggestions.set(index, searchSuggestions)
        })

        this.isLoading.set(index, false)
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

  shouldShowExpanded (index) {
    const currentValue = this.Values.get(index)
    const type = currentValue?.['@value'] ? 'text' : 'reference'

    return this.expanded.get(index) ||
      !this.Values.get(index) ||
      this.isLoading.get(index) ||
      type === 'reference' && currentValue['@id']?.substr(0, 4) !== 'http'
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
    const hrefValue = value?.['@id'] ?? ''
    const textValue = value?.['@value'] ?? ''
    const type = textValue ? 'text' : 'reference'

    const meta = this.metas.get(hrefValue)

    const editButton = () => this.html`<button type="button" class="button edit" onclick="${() => { this.expanded.set(index, true); this.render() }}">
      ${fa(faPencilAlt)}
    </button>`

    const acceptButton = () => this.html`<button type="button" class="button" onclick="${() => {
      this.expanded.set(index, false);
      this.searchSuggestions.set(index, [])
      this.render();
    }}">
      ${fa(faCheck)}
    </button>`

    return this.html.for(this.values, index)`
      ${type === 'reference' ? this.html.for(this.values, index)`
        ${hrefValue.substr(0, 4) === 'http' ? await this.templateReferenceLabel(meta, hrefValue) : ''}
        ${(hrefValue && meta) && !this.expanded.get(index) ? this.html`
        ${editButton()}
        ${await this.ourTemplateRemoveButton(index)}
      ` : this.html.for(this.values, index)`
        ${await super.templateItem(index, hrefValue)}
        ${hrefValue.substr(0, 4) === 'http' ? acceptButton() : ''}
        ${await this.ourTemplateRemoveButton(index)}
        ${await this.templateSearchSuggestions(index)}
      `}
    ` : this.html.for(this.values, index)`
        ${this.expanded.get(index) ? this.html`
          ${await super.templateItem(index, textValue, '')}
          ${acceptButton()}
        ` : this.html`
          <div classy:referenceLabel="reference-label">${textValue}</div>
          ${editButton()}
        `}
        ${await this.ourTemplateRemoveButton(index)}
      `}
    `
  }
}
