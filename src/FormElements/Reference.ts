import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { getObjectOfQuadByPredicate, debounce } from '../Helpers'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { newEngine } from '@comunica/actor-init-sparql'

dom.watch()
library.add(faTimes)

export class Reference extends FormElementBase implements FormElement {

  static type: string = 'reference'
  public metas = []
  public searchSuggestions = []

  async init(): Promise<void> {
    await super.init();

    this.updateMetas().then(() => this.render())

    // if there is an autocomplete query and the query does not contain the SEARCH_TERM token.
    if (typeof this.field.autoCompleteQuery === 'string') {
      if (!this.field.autoCompleteQuery.includes('SEARCH_TERM')) {
        await this.sparqlQuery()
      }
    }

    this.addEventListener('keyup', debounce(async (event: any) => {
      const value = event.detail.originalEvent.target.value

      if (value.substr(0, 4) !== 'http') {
        this.searchSuggestions = []

        if (this.field.autoCompleteQuery) {
          await this.sparqlQuery(value)
        }
        else {
          await this.dbpediaSuggestions(value)
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

  async sparqlQuery (searchTerm: string = '') {
    const config = {}
    config['@comunica/actor-http-proxy:httpProxyHandler'] = this.form.proxy
    const myEngine = newEngine();
    let query: string = this.field.autoCompleteQuery
    query = query.replace(/LANGUAGE/g, this.form.language)
    query = query.replace(/SEARCH_TERM/g, searchTerm)

    const result = await myEngine.query(query, {
      sources: [this.field.autoCompleteSource],
    });

    /** @ts-ignore */
    const bindings = await result.bindings()

    for (const binding of bindings) {
      let label = binding.get('?label')?.id
      if (label.split('"').length > 1) label = label.split('"')[1]
      const uri = binding.get('?uri')?.id
      this.searchSuggestions.push({ label, uri })
    }
  }

  async dbpediaSuggestions (searchTerm: string) {
    const response = await fetch(`https://lookup.dbpedia.org/api/prefix?query=${searchTerm}`)
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
  }

  removeReference (index) {
    this.values[index]['@id'] = ''
    this.metas[index] = {}
  }

  templateItem (index, value) {
    const textValue = value?.['@id'] ?? ''

    const meta = this.metas[index]

    return meta && Object.keys(meta).length ? this.html`
    <div classy:referencePreview="reference-preview">
        ${meta.thumbnail ? this.html`<img classy:referencePreviewLeft="reference-preview-left" src="${meta.thumbnail}" />` : ''}
        <div classy:referencePreviewRight="reference-preview-right">
          ${meta.label ? this.html`<h3 classy:referencePreviewTitle="reference-preview-title" title="${textValue}">
            ${meta.label} <button class="button" onclick="${() => {this.removeReference(index); this.render()}}"><i class="fas fa-times"></i></button>
          </h3>` : ''}
          ${meta.description ? this.html`<small classy:referencePreviewDescription="reference-preview-description">${meta.description}</small>` : ''}
        </div>
    </div>
    ` : this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      .value="${textValue}"
      required=${this.isRequired(index)}
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
    if (!this.values[index]?.['@id']) {
      this.values[index] = { '@id': '' }
    }
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

    let description =
      getObjectOfQuadByPredicate('http://purl.org/dc/terms/description', uri, quads, this.form.language) ??
      getObjectOfQuadByPredicate('http://www.w3.org/2000/01/rdf-schema#comment', uri, quads, this.form.language)

    return {
      thumbnail: getObjectOfQuadByPredicate('http://dbpedia.org/ontology/thumbnail', uri, quads),
      label: getObjectOfQuadByPredicate('http://www.w3.org/2000/01/rdf-schema#label', uri, quads, this.form.language),
      description: description,
    }
  }
}
