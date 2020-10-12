import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { getObjectOfQuadByPredicate, debounce } from '../Helpers'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

dom.watch()
library.add(faTimes)

export class Reference extends FormElementBase implements FormElement {

  static type: string = 'reference'
  public metas = []
  public searchSuggestions = []

  async init(): Promise<void> {
    await super.init();
    this.updateMetas().then(() => this.render())

    this.addEventListener('keyup', debounce(async (event: any) => {
      const value = event.detail.originalEvent.target.value
      if (value.substr(0, 4) !== 'http') {
        const response = await fetch(`https://lookup.dbpedia.org/api/prefix?query=${value}`)
        const xml = await response.text();

        const parser = new DOMParser();
        const dom: any = parser.parseFromString(xml, 'application/xml')

        this.searchSuggestions = []

        for (const result of dom.querySelectorAll('Result')) {
          const label = result.querySelector('Label').textContent
          const uri = result.querySelector('URI').textContent

          // Dedup languages.
          if (uri.substr(0, 18) === 'http://dbpedia.org') {
            this.searchSuggestions.push({ label, uri })
          }
        }

        this.render()
      }
    }, 400))

    this.addEventListener('change', (event: any) => {
      this.updateMetas().then(() => {
        this.render()
      })
    })
  }

  removeReference (index) {
    this.values[index]['@id'] = ''
    this.metas[index] = {}
  }

  templateItem (index, value) {
    const textValue = value?.['@id']

    const meta = this.metas[index]

    return meta && Object.keys(meta).length ? this.html`
    <div classy:referencePreview="reference-preview">
        ${meta.thumbnail ? this.html`<img classy:referencePreviewLeft="reference-preview-left" src="${meta.thumbnail}" />` : ''}
        <div classy:referencePreviewRight="reference-preview-right">
          ${meta.label ? this.html`<h3 classy:referencePreviewTitle="reference-preview-title">
            ${meta.label} <button class="button" onclick="${() => {this.removeReference(index); this.render()}}"><i class="fas fa-times"></i></button>
          </h3>` : ''}
          ${meta.description ? this.html`<small classy:referencePreviewDescription="reference-preview-description">${meta.description}</small>` : ''}
          <small classy:referencePreviewUrl="reference-preview-url">${textValue}</small>
        </div>
    </div>
    ` : this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      .value="${textValue}"
      required="${this.isRequired(index)}"
    >

    ${this.searchSuggestions.length ? this.html`
      <ul classy:referencePreviewSearchSuggestions="search-suggestions">
        ${this.searchSuggestions.map(suggestion => this.html`<li onclick="${async () => { await this.selectSuggestion(suggestion.uri, index); this.render() }}">${suggestion.label}</li>`)}
      </ul>
    ` : ''}
    `
  }

  async selectSuggestion (suggestionUrl, index) {
    this.searchSuggestions = []
    this.values[index]['@id'] = suggestionUrl
    await this.updateMetas()
  }

  async updateMetas () {
    for (const [index, value] of this.values.entries()) {
      const uri = value?.['@id']
      this.metas[index] = await this.fetchMeta(uri)
    }
  }

  async fetchMeta (uri = undefined) {
    if (!uri || uri.substr(0, 4) !== 'http') return
    const quads = await this.form.ontologyRepository.dereference(uri)

    return {
      thumbnail: getObjectOfQuadByPredicate('http://dbpedia.org/ontology/thumbnail', quads),
      label: getObjectOfQuadByPredicate('http://www.w3.org/2000/01/rdf-schema#label', quads, this.form.language),
      description: getObjectOfQuadByPredicate('http://purl.org/dc/terms/description', quads, this.form.language),
    }
  }
}
