import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { debounce } from '../Helpers'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

dom.watch()
library.add(faTimes)

export class Reference extends FormElementBase implements FormElement {

  static type: string = 'reference'

  async init(): Promise<void> {
    await super.init();

    this.addEventListener('keyup', debounce(async (event: any) => {
      const value = event.detail.originalEvent.target.value
      if (value.substr(0, 4) !== 'http') {
        this.searchSuggestions = []
        this.field.autoCompleteQuery ? await this.sparqlQuery(value) : await this.dbpediaSuggestions(value)
        this.render()
      }
    }, 400))

    this.form.addEventListener('language-change', () => {
      this.updateMetas().then(() => this.render())
    })

    this.addEventListener('change', () => {
      this.updateMetas().then(() => this.render())
    })

    this.updateMetas().then(() => this.render())

    // if there is an autocomplete query and the query does not contain the SEARCH_TERM token.
    if (typeof this.field.autoCompleteQuery === 'string' && !this.field.autoCompleteQuery.includes('SEARCH_TERM')) {
      await this.sparqlQuery()
    }
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
    const meta = this.metas.get(value)

    const description = (await meta['dc:description'] ?? await meta['rdf:comment'] ?? '').toString()
    const thumbnail = (await meta['dbp:thumbnail'] ?? await meta['foaf:depiction'] ?? '').toString()
    const label = (await meta['rdf:label'] ?? await meta['foaf:name'] ?? '').toString()

    const metaResolved = { label, description, thumbnail }

    return metaResolved && Object.keys(metaResolved).length ? this.templateReferencePreview(metaResolved) : this.html`
      ${super.templateItem(index, textValue)}
      ${this.searchSuggestions.length ? this.html`
      <ul classy:referencePreviewSearchSuggestions="search-suggestions">
        ${this.searchSuggestions.map(suggestion => this.html`<li onclick="${async () => { await this.selectSuggestion(suggestion.uri, index); this.render() }}">${suggestion.label}</li>`)}
      </ul>
      ` : ''}
    `
  }

}
