import { html } from 'uhtml'
import { RdfForm } from '../RdfForm'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faQuestionCircle, faPlus, faLanguage, faCog } from '@fortawesome/free-solid-svg-icons'
import { fieldPrototype } from '../Types'

dom.watch()
library.add(faTimes, faQuestionCircle, faPlus, faLanguage, faCog)

export class FormElementBase extends EventTarget {

  static type: string = 'base'

  public field: fieldPrototype
  public form: RdfForm
  public values: Array<any> = []

  private menuIsOpen: boolean = false

  public cssClasses = {
    wrapper: ['form-element', this.constructor['type']],
    item: ['form-element-item'],
    itemFooter: ['form-element-item-footer'],
    items: ['form-element-items'],
    label: ['form-element-label'],
    menu: ['form-element-menu'],
    menuButton: ['form-element-menu-button', 'button'],
    menuWrapper: ['form-element-menu-wrapper'],
    children: ['form-element-children'],
    childItem: ['form-element-child'],
    languageSelector: ['form-element-language-selector'],
    description: ['form-element-description']
  }

  constructor (field, rdfForm: RdfForm) {
    super()
    this.form = rdfForm
    this.field = field
    this.values = Array.isArray(this.form.expandedData[this.field.binding]) ? this.form.expandedData[this.field.binding] : [this.form.expandedData[this.field.binding]]
  }

  async init () {}

  get label () {
    const label = this.field.label[this.form.language]
    return label ? label.charAt(0).toUpperCase() + label.slice(1) : ''
  }

  get description () {
    return ''
  }

  addTranslation () {
    let usedLanguages = this.values.map(value => value['@language'])
    let unusedLanguages = Object.keys(this.form.i14nLanguages).filter(language => !usedLanguages.includes(language))

    if (unusedLanguages.length) {
      this.values.push({ '@value': '', '@language': unusedLanguages.shift() })
    }
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

  isRequired (index) {
    return index === 0 && this.field.required
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

  on (event, index) {
    this.setValue(event, index)
    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index
      }
    }))
  }

  templateLabel () {
    return this.label ? html`
    <label class="${this.cssClasses.label.join(' ')}">
      ${this.label}
      ${this.field.required ? html`<span>*</span>` : ''}
      ${this.templateFieldMenu()}
    </label>` : ''
  }

  templateDescription () {
    return this.description ? html`
    <small class="${this.cssClasses.description.join(' ')}">
      ${this.description}
    </small>` : ''
  }

  templateItem (index, value) {
    const textValue = value?.['@value'] ?? value
    return html`
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

    return html`
    <select onchange="${event => this.values[index]['@language'] = event.target.value}" class="${this.cssClasses.languageSelector.join(' ')}">
    ${unusedLanguages.map((language) => {
      return language === selectedLanguage ? html`
        <option value="${language}" selected>${this.form.i14nLanguages[language]}</option>
        ` : html`
        <option value="${language}">${this.form.i14nLanguages[language]}</option>
        `
    })}
    </select>`
  }

  templateItemFooter (index, value) {
    return false
  }

  templateFieldMenu () {
    const classes = [...this.cssClasses.menu]
    if (this.menuIsOpen) classes.push('open')

    const buttons = this.getMenuButtons()

    return buttons.length ? html`
      <div class="${this.cssClasses.menuWrapper.join(' ')}">
        <button class="${this.cssClasses.menuButton.join(' ')}" onclick="${() => {this.menuIsOpen = !this.menuIsOpen; this.render()}}"><i class="fas fa-cog"></i></button>
        <ul onclick="${() => {this.menuIsOpen = false; this.render()}}" class="${classes.join(' ')}">
          ${buttons.map(button => html`<li>${button}</li>`)}
        </ul>
      </div>
    ` : ''
  }

  getMenuButtons () {
    const buttons = []

    if (this.field.translatable && !this.hasTranslations) {
      buttons.push(html`<button class="button add" onclick="${() => {
        this.enableTranslations()
        this.render()
      }}">${this.form.t.direct('Create translation')}</button>`)
    }

    if (this.field.translatable && this.hasTranslations) {
      buttons.push(html`<button class="button add" onclick="${() => {
        this.removeTranslations()
        this.render()
      }}">${this.form.t.direct('Remove translations')}</button>`)
    }

    return buttons
  }

  templateWrapper () {
    const countToRender = this.values.length ? this.values.length : 1

    const itemsToRender = []
    for (let i = 0; i < countToRender; i++) {
      itemsToRender.push(this.values[i] ? this.values[i] : null)
    }

    return html`
    <div class="${this.cssClasses.wrapper.join(' ')}">

      ${this.templateLabel()}

      ${html`
        <div class="${this.cssClasses.items.join(' ')}">
        ${itemsToRender.map((value, index) => {
          const templateItemFooter = this.templateItemFooter(index, value)

          return html`
          <div class="${this.cssClasses.item.join(' ')}">
            ${this.templateItem(index, value)}
            ${this.values[index]?.['@language'] ? this.templateLanguageSelector(index, value) : ''}

            ${this.showRemoveButton(index) ? html`<button class="button remove" onclick="${() => {
              this.removeItem(index)
              this.render()
            }}">${this.form.t.direct('Remove item')}</button>` : ''}

            ${templateItemFooter ? html`<div class="${this.cssClasses.itemFooter.join(' ')}">${templateItemFooter}</div>` : ''}
          </div>
        `})}
        </div>
      `}

      ${this.templateDescription()}

      <div class="field-actions">
        ${this.field.translatable && this.anotherTranslationIsPossible && this.hasTranslations ? html`<button class="button add" onclick="${() => {
          this.addTranslation()
          this.render()
        }}">${this.form.t.direct('Add translation')}</button>` : ''}

        ${this.field.multiple ? html`<button class="button add" onclick="${() => {
          this.addItem()
          this.render()
        }}">${this.form.t.direct('Add item')}</button>` : ''}
      </div>
    </div>`
  }

  render () {
    return this.form.render()
  }

}

