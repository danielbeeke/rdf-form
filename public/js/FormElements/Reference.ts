import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { debounce, fa, searchSuggestionsSparqlQuery, dbpediaSuggestions, sparqlQueryToList } from '../Helpers'
import { faPencilAlt, faCheck, faTimes } from '../vendor/free-solid-svg-icons.js'
import { Language, t } from '../LanguageService'

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

        try {
          const querySetting = this.Field.autoCompleteQuery.toString()
          const sourceSetting = this.Field.autoCompleteSource.toString()

          const {
            query,
            source
          } = querySetting || sourceSetting ? searchSuggestionsSparqlQuery(querySetting, sourceSetting, value) : dbpediaSuggestions(value)

          if (query && source) {
            sparqlQueryToList(query, source, this.comunica).then(searchSuggestions => {
              searchSuggestions.push({
                label: t`Add <strong>${{searchTerm: value}}</strong> as text without reference.`,
                value: value
              })

              this.searchSuggestions.set(index, searchSuggestions)
              this.isLoading.set(index, false)
              this.render()
            }).catch(exception => {
              console.error(exception)
              this.searchSuggestions.delete(index)
              this.isLoading.set(index, false)
              this.render()
            })
          }
        }
        catch (e) {
          console.log(e)
        }

        this.render()
      }
    }, 400))

    Language.addEventListener('language-change', () => {
      this.updateMetas().then(() => this.render())
    })

    this.addEventListener('change', event => {
      this.updateMetas().then(() => this.render())
    })

    this.updateMetas().then(() => this.render())
  }

  async ourTemplateRemoveButton (index) {
    // TODO fix this.
    // THis hack is done for nested fields in fieldgroups.
    return this.parent?.formElementRegistry ? this.html`
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
        this.Values.set({'@id': event?.target?.value}, index)
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
    const hrefValue = value?.['@id'] ?? ''
    const textValue = value?.['@value'] ?? ''
    const type = textValue ? 'text' : 'reference'

    const meta = hrefValue ? this.metas.get(hrefValue) : null

    const editButton = () => this.html`<button type="button" class="button edit" onclick="${() => { this.expanded.set(index, true); this.render() }}">
      ${fa(faPencilAlt)}
    </button>`

    const acceptButton = () => this.html`<button type="button" class="button accept" onclick="${() => {
      this.expanded.set(index, false);
      this.searchSuggestions.set(index, [])
      this.searchTerms.delete(index)
      this.render();
    }}">
      ${fa(faCheck)}
    </button>`

    return type === 'reference' ? this.html`
      ${hrefValue.substr(0, 4) === 'http' && meta ? await this.templateReferenceLabel(meta, hrefValue) : ''}
      ${(hrefValue && meta) && !this.expanded.get(index) ? this.html`
      ${editButton()}
      ${await this.ourTemplateRemoveButton(index)}
    ` : this.html`
      ${await super.templateItem(index, hrefValue ?? searchTerm)}
      ${hrefValue.substr(0, 4) === 'http' ? acceptButton() : ''}
      ${await this.ourTemplateRemoveButton(index)}
      ${await this.templateSearchSuggestions(index)}
    `}
  ` : this.html`
      ${this.expanded.get(index) ? this.html`
        ${await super.templateItem(index, textValue, '')}
        ${acceptButton()}
      ` : this.html`
        <div type="${type}" class="reference-label">${textValue}</div>
        ${editButton()}
      `}
      ${await this.ourTemplateRemoveButton(index)}
    `
  }
}
