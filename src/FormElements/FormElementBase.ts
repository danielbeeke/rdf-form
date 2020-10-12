/**
 * This is the base class for every form element.
 * You can extend this class and only overwrite the template methods that you want to change.
 *
 * Also if you only want to change css classes you can use the following:
 * - Inspect the template and search for classy:IDENTIFIER="DEFAULT_CLASSES"
 * - Before starting RdfForm call:
 * - Classy.add(IDENTIFIER, ['your', 'classes'])
 * - Classy.add('formElement', ['your', 'classes'])
 */

import { RdfForm } from '../RdfForm'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faQuestionCircle, faPlus, faLanguage, faCog } from '@fortawesome/free-solid-svg-icons'
import { fieldPrototype } from '../Types'
import { Classy } from '../Classy'

dom.watch()
library.add(faTimes, faQuestionCircle, faPlus, faLanguage, faCog)

export class FormElementBase extends EventTarget {

  static type: string = 'base'

  public field: fieldPrototype
  public form: RdfForm
  public values: Array<any> = []
  public html: any

  private menuIsOpen: boolean = false

  constructor (field, rdfForm: RdfForm) {
    super()
    this.html = Classy
    this.form = rdfForm
    this.field = field
    this.values = Array.isArray(this.form.expandedData[this.field.binding]) ?
      this.form.expandedData[this.field.binding] :
      [this.form.expandedData[this.field.binding]]
  }

  async init () {}

  render () {
    return this.form.render()
  }

  /************************************************************************
   * Getters and setters.
   ************************************************************************/

  get label () {
    const label = this.field.label[this.form.language]
    return label ? label.charAt(0).toUpperCase() + label.slice(1) : ''
  }

  get description () {
    return ''
  }

  get hasTranslations () {
    return !!this.values?.[0]?.['@language']
  }

  get anotherTranslationIsPossible () {
    const usedLanguagesCount = this.values.map(value => value['@language']).length
    const i14nLanguagesCount = Object.keys(this.form.i14nLanguages).length
    return this.hasTranslations && usedLanguagesCount < i14nLanguagesCount
  }

  showRemoveButton (index) {
    return index > 0
  }

  isRequired (index) {
    return index === 0 && this.field.required
  }

  getMenuButtons () {
    const buttons = []

    if (this.field.translatable && !this.hasTranslations) {
      buttons.push(this.createButton('add', 'enableTranslations', 'Create translation'))
    }

    if (this.field.translatable && this.hasTranslations) {
      buttons.push(this.createButton('remove', 'removeTranslations', 'Remove translations'))
    }

    return buttons
  }

  /************************************************************************
   * Mutators.
   ************************************************************************/

  addTranslation () {
    let usedLanguages = this.values.map(value => value['@language'])
    let unusedLanguages = Object.keys(this.form.i14nLanguages).filter(language => !usedLanguages.includes(language))

    if (unusedLanguages.length) {
      this.values.push({ '@value': '', '@language': unusedLanguages.shift() })
    }
  }

  addItem () {
    if (typeof this.values[0] === 'object') {
      this.values.push(Object.assign({}, this.values[0], { '@value': '' }))
    }
    else {
      this.values.push('')
    }
  }

  removeItem (index) {
    this.values.splice(index, 1)
  }

  enableTranslations () {
    for (const [index, value] of this.values.entries()) {
      if (typeof value === 'object') {
        this.values[index]['@language'] = this.form.language
      }
      else {
        this.values[index] = {
          '@value': this.values[index],
          '@language': this.form.language
        }
      }
    }
  }

  removeTranslations () {
    if (this.values?.[0]?.['@language'] && this.values?.[0]?.['@value']) {
      this.values = [this.values?.[0]?.['@value']]
    }
  }

  setValue (event, index) {
    if (!event?.target?.value) return
    if (typeof this.values[index]?.['@value'] !== 'undefined') {
      this.values[index]['@value'] = event.target.value
    }
    else if (typeof this.values[index]?.['@id'] !== 'undefined') {
      this.values[index]['@id'] = event.target.value
    }
    else {
      this.values[index] = event.target.value
    }
  }

  /************************************************************************
   * Helpers.
   ************************************************************************/

  createButton (buttonClass, method, label) {
    return this.html`<button class="${'button ' + buttonClass}" onclick="${() => {
      this[method]()
      this.render()
    }}">${this.form.t.direct(label)}</button>`
  }

  on (event, index) {
    this.setValue(event, index)
    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index
      }
    }))
  }

  /************************************************************************
   * Templates.
   ************************************************************************/

  templateLabel () {
    return this.label ? this.html`
    <label classy:label="form-element-label">
      ${this.label}
      ${this.field.required ? this.html`<span>*</span>` : ''}
      ${this.templateFieldMenu()}
    </label>` : ''
  }

  templateDescription () {
    return this.description ? this.html`
    <small classy:description="form-element-description">
      ${this.description}
    </small>` : ''
  }

  templateItem (index, value) {
    const textValue = value?.['@value'] ?? value
    return this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      value="${textValue}"
      required="${this.isRequired(index)}"
    >`
  }

  templateLanguageSelector (index, value) {
    const selectedLanguage = value['@language']
    let usedLanguages = this.values.map(value => value['@language'])
    let unusedLanguages = Object.keys(this.form.i14nLanguages).filter(language => !usedLanguages.includes(language))
    unusedLanguages.push(selectedLanguage)

    return this.html`
    <select onchange="${event => this.values[index]['@language'] = event.target.value}" classy:languageSelector="form-element-language-selector">
    ${unusedLanguages.map((language) => {
      return language === selectedLanguage ? this.html`
        <option value="${language}" selected>${this.form.i14nLanguages[language]}</option>
        ` : this.html`
        <option value="${language}">${this.form.i14nLanguages[language]}</option>
        `
    })}
    </select>`
  }

  templateItemFooter (index, value) {
    return false
  }

  templateFieldMenu () {
    const buttons = this.getMenuButtons()

    return buttons.length ? this.html`
      <div classy:menu-wrapper="form-element-menu-wrapper">
        <button classy:menuButton="form-element-menu-button button" onclick="${() => {this.menuIsOpen = !this.menuIsOpen; this.render()}}">
            <i class="fas fa-cog"></i>
        </button>
        <ul onclick="${() => {this.menuIsOpen = false; this.render()}}" open="${this.menuIsOpen}" classy:menu="form-element-menu">
          ${buttons.map(button => this.html`<li>${button}</li>`)}
        </ul>
      </div>
    ` : ''
  }

  /**
   * Called via the RdfForm
   * @see RdfForm.render()
   */
  templateWrapper () {
    const countToRender = this.values.length ? this.values.length : 1

    const itemsToRender = []
    for (let i = 0; i < countToRender; i++) {
      itemsToRender.push(this.values[i] ? this.values[i] : null)
    }

    return this.html`
    <div classy:wrapper="form-element">

      ${this.templateLabel()}

      ${this.html`
        <div classy:items="form-element-items">
        ${itemsToRender.map((value, index) => {
          const templateItemFooter = this.templateItemFooter(index, value)

          return this.html`
          <div classy:item="form-element-item">
            ${this.templateItem(index, value)}
            ${this.values[index]?.['@language'] ? this.templateLanguageSelector(index, value) : ''}

            ${this.showRemoveButton(index) ? this.html`<button class="button remove" onclick="${() => {
              this.removeItem(index)
              this.render()
            }}">${this.form.t.direct('Remove item')}</button>` : ''}

            ${templateItemFooter ? this.html`<div classy:item-footer="item-footer">${templateItemFooter}</div>` : ''}
          </div>
        `})}
        </div>
      `}

      ${this.templateDescription()}

      <div classy:actions="form-element-actions">
        ${this.field.translatable && this.anotherTranslationIsPossible && this.hasTranslations ? this.html`<button class="button add" onclick="${() => {
          this.addTranslation()
          this.render()
        }}">${this.form.t.direct('Add translation')}</button>` : ''}

        ${this.field.multiple ? this.html`<button class="button add" onclick="${() => {
          this.addItem()
          this.render()
        }}">${this.form.t.direct('Add item')}</button>` : ''}
      </div>
    </div>`
  }

}

