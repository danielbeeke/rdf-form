import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { fa } from '../helpers/fa'
import { faPencilAlt, faCheck, faReply } from '../helpers/icons'
import { searchSuggestionsSparqlQuery } from '../helpers/searchSuggestionsSparqlQuery'
import { dbpediaSuggestions } from '../helpers/dbpediaSuggestions'
import { sparqlQueryToList } from '../helpers/sparqlQueryToList'
import { t, Language } from '../core/Language'
import { attributesDiff } from '../helpers/attributesDiff'
import { debounce } from '../helpers/debounce'
      
export class Reference extends ElementBase {

  protected jsonldKey = 'id'
  protected expanded = false
  protected searchTerm = null
  protected previousValue = null

  constructor (...args) {
    super(...args)
    this.autocomplete = debounce(this.autocomplete.bind(this), 400)
  }

  async on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      if (!this.value) await this.addItem()
      if (event.target.value.substr(0, 4) === 'http') {
        this.value[`@${this.jsonldKey}`] = event.target.value
      }
      else if (this.definition['form:autoCompleteQuery']?._) {
        this.searchTerm = event.target.value
        this.autocomplete()
      }
    }
  }

  autocomplete () {
    if (!this.searchTerm) return
    const querySetting = this.definition['form:autoCompleteQuery']?._
    const sourceSetting = this.definition['form:autoCompleteSource']?._

    const {
      query,
      source
    } = querySetting || sourceSetting ? searchSuggestionsSparqlQuery(querySetting, sourceSetting, this.searchTerm) : dbpediaSuggestions(this.searchTerm)

    if (query && source) {
      sparqlQueryToList(query, source).then(searchSuggestions => {
        searchSuggestions.push({
          label: t`Add <strong>${{searchTerm: this.searchTerm}}</strong> as text without reference.`,
          value: this.searchTerm
        })

        this.suggestions = searchSuggestions
        this.render()
      }).catch(exception => {
        console.error(exception)
        this.searchTerm = null
        this.suggestions = []
        this.render()
      })
    }
  }

  input () {
    return html`
      <input 
        ref=${attributesDiff(this.attributes)} 
        .value=${this.searchTerm ?? this.value?._ ?? ''} 
        onchange=${(event) => this.on(event)}
        onkeyup=${(event) => this.on(event)}
      />
    `
  }

  item (childTemplates: Array<typeof html> = []) {
    const value = this.value?._
    const uri = value?.substr(0, 4) === 'http' ? value : false

    const editButton = () => html`<button type="button" class="button edit" onclick="${() => { 
      this.expanded = true
      this.previousValue = this.value?._
      this.render() 
    }}">
      ${fa(faPencilAlt)}
    </button>`

    const acceptButton = () => html`<button type="button" class="button accept primary" onclick="${() => {
      this.expanded = false
      this.render();
    }}">
      ${fa(faCheck)}
    </button>`

    const restoreButton = () => html`
    <button type="button" class="button back" onclick="${() => {
      this.expanded = false
      this.searchTerm = null
      this.suggestions = []
      this.value[`@${this.jsonldKey}`] = this.previousValue
      this.render()
    }}">
      ${fa(faReply)}
    </button>`

    const isCollapsed = (uri || this.value?.['@value']) && !this.expanded && !this.searchTerm 

    return html`
    <div class="item" expanded=${!isCollapsed} has-suggestions=${this.searchTerm}>
      ${isCollapsed ? 
        html`${this.referenceLabel()} ${editButton()}` : 
        html`${this.input()} ${!this.searchTerm ? acceptButton() : ''} ${restoreButton()} ${this.removeButton()}`
      }

      ${this.searchTerm ? this.searchSuggestions() : ''}

      ${childTemplates}
    </div>`
  }

  searchSuggestions () {
    const hasResults = !(this.suggestions[0]?.value)

    return this.suggestions.length ? html`
    <ul class="search-suggestions">
      ${!hasResults ? html`<li class="search-suggestion no-results">
        <span class="title">${t`Nothing found`}</span>
      </li>` : ''}
      ${this.suggestions.map(suggestion => html`
      <li class="search-suggestion" onclick="${() => {
        if (suggestion.uri) {
          this.value['@id'] = suggestion.uri
          delete this.value['@value']
        }
        else if (suggestion.value) {
          delete this.value['@id']
          this.value['@value'] = suggestion.value
        }

        this.expanded = false
        this.searchTerm = null
        this.suggestions = []
  
        this.render()
      }}">
        ${suggestion.image ? html`<div class="image"><img src="${`//images.weserv.nl/?url=${suggestion.image}&w=100&h=100`}"></div>` : ''}
        <span class="title">${suggestion.label?.[Language.uiLanguage] ?? suggestion.label}</span>
      </li>`)}
    </ul>
      ` : ''
  }

}