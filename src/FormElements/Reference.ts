import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import {debounce, fa, searchSuggestionsSparqlQuery, dbpediaSuggestions, sparqlQueryToList } from '../Helpers'
import {faPencilAlt, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import { t } from '../LanguageService'

export class Reference extends FormElementBase implements FormElement {

  static type: string = 'reference'
  private searchTerms: Map<string, string> = new Map<string, string>()

  async init(): Promise<void> {
    await super.init();

    this.templateRemoveButton = async () => {}

    this.addEventListener('keyup', debounce(async (event: any) => {
      const index = event.detail?.index
      const value = event.detail?.value

      if (value && value.substr(0, 4) !== 'http' && (!this.Values.get(index) || !this.Values.get(index)['@value'])) {
        this.isLoading.set(index, true)
        this.searchSuggestions.set(index, [])
        this.render();

        const querySetting = this.Field.autoCompleteQuery.toString()
        const sourceSetting = this.Field.autoCompleteSource.toString()

        const {
          query,
          source
        } = querySetting ? searchSuggestionsSparqlQuery(querySetting, sourceSetting, value) : dbpediaSuggestions(value)


        sparqlQueryToList(query, source, this.form.proxy).then(searchSuggestions => {
          searchSuggestions.push({
            label: t`Add <strong>${{searchTerm: value}}</strong> as text without reference.`,
            value: value
          })

          this.searchSuggestions.set(index, searchSuggestions)
          this.isLoading.set(index, false)
          this.render()
        }).catch(exception => {
          this.searchSuggestions.delete(index)
          this.isLoading.set(index, false)
          this.render()
        })

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

  async ourTemplateRemoveButton (index) {
    return this.parent === this.form ? this.html`
    <button type="button" class="button remove" onclick="${() => {
      this.Values.removeItem(index)
      this.searchTerms.delete(index)
      this.searchSuggestions.delete(index)
      this.render()
    }}">
      ${fa(faTimes)}
    </button>` : ''
  }

  on (event, index) {
    if (['keyup', 'change'].includes(event.type)) {
      if (event?.target?.value && event?.target?.value.substr(0, 4) === 'http' || this.Values.get(index) && this.Values.get(index)['@value']) {
        this.Values.setValue(event?.target?.value, index)
      }
      else {
        this.searchTerms.set(index, event?.target?.value)
      }
    }

    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }

  shouldShowExpanded (index) {
    const currentValue = this.Values.get(index)
    const type = currentValue?.['@value'] ? 'text' : 'reference'

    return this.expanded.get(index) ||
      !this.Values.get(index) ||
      this.isLoading.get(index) ||
      type === 'reference' && currentValue['@id']?.substr(0, 4) !== 'http'
  }

  async selectSuggestion (suggestionUrl, index) {
    this.searchTerms.delete(index)
    await super.selectSuggestion(suggestionUrl, index)
  }

  async selectValue (value, index) {
    this.searchTerms.delete(index)
    await super.selectValue(value, index)
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
    const searchTerm = this.searchTerms.get(index)
    const hrefValue = searchTerm ? searchTerm : value?.['@id'] ?? ''
    const textValue = value?.['@value'] ?? ''
    const type = textValue ? 'text' : 'reference'

    const meta = this.metas.get(hrefValue)

    const editButton = () => this.html`<button type="button" class="button edit" onclick="${() => { this.expanded.set(index, true); this.render() }}">
      ${fa(faPencilAlt)}
    </button>`

    const acceptButton = () => this.html`<button type="button" class="button" onclick="${() => {
      this.expanded.set(index, false);
      this.searchSuggestions.set(index, [])
      this.searchTerms.delete(index)
      this.render();
    }}">
      ${fa(faCheck)}
    </button>`

    return this.html`
      ${type === 'reference' ? this.html.for(this.values, index)`
        ${hrefValue.substr(0, 4) === 'http' && meta ? await this.templateReferenceLabel(meta, hrefValue, index) : ''}
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
          <div type="${type}" classy:referenceLabel="reference-label">${textValue}</div>
          ${editButton()}
        `}
        ${await this.ourTemplateRemoveButton(index)}
      `}
    `
  }
}
