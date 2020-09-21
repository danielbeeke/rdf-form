import { html } from 'uhtml'
import { LanguageCodes } from '../Helpers'
import { RdfForm } from '../RdfForm'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faQuestionCircle, faPlus, faLanguage, faCog } from '@fortawesome/free-solid-svg-icons'
import { FormElementData } from '../Types'

dom.watch()
library.add(faTimes, faQuestionCircle, faPlus, faLanguage, faCog)

export class FormElementBase extends EventTarget {

  static type: string = 'base'

  readonly data: any
  readonly form: RdfForm
  public translatable: boolean
  public multiple: boolean
  public removable: boolean
  public translationsEnabled: boolean
  public languages: Array<any>
  readonly newQuad: any
  public fieldMenuExpanded: boolean = false

  constructor (formElementData, rdfForm: RdfForm) {
    super()
    this.form = rdfForm
    this.data = formElementData
    this.languages = []

    this.translatable = this.data.quads[0]?.toJSON && this.data.quads[0]?.toJSON().object.termType === 'Literal'
    this.translationsEnabled = !! this.data.quads[0]?.toJSON ? this.data.quads[0]?.toJSON().object?.language : false
    this.multiple = this.translatable || this.data.quads.length > 1
    this.removable = true

    LanguageCodes.list(this.form.proxy).then(languages => {
      this.languages = languages
      this.render()
    })

    const lastQuad = this.data.quads[this.data.quads.length - 1];
    this.newQuad = Object.assign({}, lastQuad)
  }

  get label () {
    const label = this.data?.predicateMeta?.label
    return label ? label?.[this.form.language] ?? label?.['default'] : ''
  }

  get description () {
    const comment = this.data?.predicateMeta?.comment
    return comment ? comment?.[this.form.language] ?? comment?.['default'] : ''
  }

  get value () {
    return this.data.quads[0].object.value
  }

  getSubformElement (predicateUri): FormElementData {
    return this.data.children.find(child => child.quads[0].predicate?.id === predicateUri)
  }

  addQuad () {
    const newQuad = Object.assign({}, this.newQuad)
    this.data.quads.push(newQuad)
    this.render()
  }

  removeQuad (quad) {
    const index = this.data.quads.indexOf(quad)
    this.data.quads.splice(index, 1)
    this.render()
  }

  setNewLanguage (language) {
    let value = this.newQuad.object.id.split('@')[0]
    value = value + '@' + language
    this.newQuad.object.id = value
  }

  enabledTranslations () {
    this.translationsEnabled = true

    for (const quad of this.data.quads) {
      quad.object.id += '@' + this.form.language
    }

    this.render()
  }

  on (type: string, event: Event) {
    this.dispatchEvent(new CustomEvent(type, {
      detail: {
        originalEvent: event
      }
    }))
  }

  toggleMenu () {
    this.fieldMenuExpanded = !this.fieldMenuExpanded
    this.render()
  }

  templateLabel () {
    return html`
    <label class="field-label">
      ${this.label}
      ${this.templateDescription()}
      ${this.templateMenu()}
    </label>`
  }

  templateMenu () {
    let buttons = []

    if (this.translatable && !this.translationsEnabled) {
      buttons.push(html`<li><button class="button" onclick="${() => this.enabledTranslations()}"><i class="fas fa-language"></i></button></li>`)
    }

    return buttons.length ? html`
      <button onclick="${() => this.toggleMenu()}" class="toggle-field-menu"><i class="fas fa-cog"></i></button>
      <ul class="${'field-menu' + (this.fieldMenuExpanded === true ? ' expanded' : '')}">
        ${buttons}
      </ul>
    ` : ''
  }

  languageSelector (selected = '', callback: any = () => {}, forElement) {
    return html.for(forElement)`<select class="language-selector" onchange="${event => callback(event)}">
      ${!selected ? html`<option value="">- Please pick a language -</option>` : ''}
      ${this.languages.map(language => {
        const label = language.translations['en']
        return selected === language.language ? html`
          <option selected value="${language.language}">${label}</option>
        ` : html`
          <option value="${language.language}">${label}</option>
        `
    })}
    </select>`
  }

  templateItem (quad) {
    const jsonQuad = quad.toJSON ? quad.toJSON() : quad
    const languageCode = jsonQuad.object?.language
    let selectedLanguage = this.languages.find(language => language.language === languageCode)

    return html.for(quad)`
      <div class="field-item">
        <input type="text"
        onchange="${event => this.on('change', event)}"
        onkeyup="${event => this.on('keyup', event)}"
        value="${jsonQuad.object.value}">

        ${languageCode ?
      selectedLanguage && this.translationsEnabled ? this.languageSelector(languageCode, () => {}, quad) : html`<span>${languageCode}</span>`
        : ''}
        ${this.templateItemActions(quad)}
      </div>
    `
  }

  templateItemActions (quad) {
    let fieldItemActions = []

    if (this.removable) {
      fieldItemActions.push(html`<button class="button remove" onclick="${() => this.removeQuad(quad)}"><i class="fas fa-times"></i></button>`)
    }

    return fieldItemActions.length > 0 ? html.for(quad)`<div class="field-item-actions">
        ${fieldItemActions}
    </div>` : ''
  }

  templateDescription () {
    return this.description ? html`<span class="field-description-tooltip-toggle"><i class="fas fa-question-circle"></i><small class="field-description-tooltip">${this.description}</small></span>` : ''
  }

  templateWrapper (field) {
    let fieldItemsActions = []

    if (this.multiple) {
      fieldItemsActions.push(html`<button class="button add" onclick="${() => this.addQuad()}"><i class="fas fa-plus"></i></button>`)
    }

    return html.for(field)`<div class="${'field ' + this.constructor['type'] }">
      ${this.templateLabel()}

      ${this.data.quads.length > 0 ? html`
      <div class="field-items">
      ${this.data.quads.map(quad => this.templateItem(quad))}
      </div>
      ` : ''}

      ${fieldItemsActions.length ? html`<div class="field-items-actions">${fieldItemsActions}</div>` : ''}

      ${this.data.children && this.data.children.length ? html`
        <div class="children">${this.data.children.map(child => child.formElement.templateWrapper(child))}</div>
      ` : ''}
    </div>`
  }

  render () {
    this.form.render()
  }
}

