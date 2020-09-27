import { html } from 'uhtml'
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { getObjectOfQuadByPredicate, debounce } from '../Helpers'

export class Uri extends FormElementBase implements FormElement {

  static type: string = 'uri'
  public metas = []
  public onKeyUpDebounced: any
  public suggestions = []

  async init(): Promise<void> {
    await super.init();
    this.updateMetas().then(() => this.render())
    this.onKeyUpDebounced = debounce(this.onKeyUp, 400)
  }

  templateItem (index, value) {
    const textValue = value['@id']
    const listHtmlId = (this.predicate + '-' + index + '-suggestions').replace(':', '')

    return html`<input
      type="text"
      onchange="${event => this.onChange(index, event.target.value)}"
      onkeyup="${event => this.onKeyUpDebounced(index, event.target.value)}"
      value="${textValue}"
      list="${listHtmlId}"
      required="${this.isRequired(index)}"
      >
    <datalist id="${listHtmlId}">
      ${this.suggestions.map(suggestion => html`<option>${suggestion.label}</option>`)}
    </datalist>
    `
  }

  templateItemFooter(index, value) {
    const meta = this.metas?.[index]

    return html`
      ${meta?.thumbnail || meta?.label || meta?.description ? html`
        ${meta?.thumbnail ? html`<img alt="${meta?.label}" class="teaser-thumbnail" src="${meta?.thumbnail}" />` : ''}
        ${meta?.label ? html`<h3 class="teaser-title">${meta?.label}</h3>` : ''}
        ${meta?.description ? html`<p class="teaser-description">${meta?.description}</p>` : ''}
      ` : ''}
    `
  }

  async onKeyUp (index, value) {
    if (this.uiSettings?.autocompleteQuery && this.uiSettings?.autocompleteSource && value.length > 4) {
      const query = `https://www.wikidata.org/w/api.php?origin=*&action=wbsearchentities&format=json&limit=50&continue=0&language=${this.form.language}&uselang=${this.form.language}&search=${value}&type=item`
      const response = await fetch(query)
      const json = await response.json()
      if (json?.search) {
        this.suggestions = json?.search.map(item => {
          return {
            label: item.label,
            uri: item.concepturi
          }
        })
      }
    }
  }

  async onChange (index, value) {
    this.values[index]['@id'] = value
    await this.updateMetas()
    this.render()
  }

  async updateMetas () {
    for (const [index, value] of this.values.entries()) {
      const uri = value['@id']
      this.metas[index] = await this.fetchMeta(uri)
    }
  }

  async fetchMeta (uri) {
    if (uri.substr(0, 4) !== 'http') return
    const quads = await this.form.ontologyRepository.dereference(uri)

    return {
      thumbnail: getObjectOfQuadByPredicate('http://dbpedia.org/ontology/thumbnail', quads),
      label: getObjectOfQuadByPredicate('http://www.w3.org/2000/01/rdf-schema#label', quads),
      description: getObjectOfQuadByPredicate('http://purl.org/dc/terms/description', quads),
    }
  }
}
