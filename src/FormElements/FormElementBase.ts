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

  public cssClasses = {
    wrapper: ['form-element', this.constructor['type']],
    item: ['form-element-item'],
    itemFooter: ['form-element-item-footer'],
    items: ['form-element-items'],
    label: ['form-element-label'],
    children: ['form-element-children'],
    childItem: ['form-element-child'],
    languageSelector: ['form-element-language-selector'],
    description: ['form-element-description']
  }

  constructor (field, rdfForm: RdfForm) {
    super()
    this.form = rdfForm
    this.field = field
  }

  get label () {
    const label = this.field.label[this.form.language]
    return label ? label.charAt(0).toUpperCase() + label.slice(1) : ''
  }

  get description () {
    return ''
  }

  get values () {
    if (this.field.binding) {
      const values = this.form.expandedData[this.field.binding]
      return Array.isArray(values) ? values : [values]
    }

    return []
  }

  isRequired (index) {
    return this.field.required
  }

  templateLabel () {
    return this.label ? html`
    <label class="${this.cssClasses.label.join(' ')}">
      ${this.label}
      ${this.field.required ? html`<span>*</span>` : ''}
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
    return html`<input type="text" value="${textValue}" required="${this.isRequired(index)}">`
  }

  templateLanguageSelector (index, value) {
    const selectedLanguage = value['@language']

    return html`
    <select onchange="${event => this.values[index]['@language'] = event.target.value}" class="${this.cssClasses.languageSelector.join(' ')}">
    ${Object.entries(this.form.i14nLanguages).map((language) => {
      const code = language[0]
      const label = language[1]
      return code === selectedLanguage ? html`
        <option value="${code}" selected>${label}</option>
        ` : html`
        <option value="${code}">${label}</option>
        `
    })}
    </select>`
  }

  templateItemFooter (index, value) {
    return html``
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
        <div class="${this.cssClasses.items}">
        ${itemsToRender.map((value, index) => {
          const templateItemFooter = this.templateItemFooter(index, value)

          return html`
          <div class="${this.cssClasses.item.join(' ')}">
            ${this.templateItem(index, value)}
            ${this.values[index]?.['@language'] ? this.templateLanguageSelector(index, value) : ''}
            ${templateItemFooter ? html`<div class="${this.cssClasses.itemFooter.join(' ')}">${templateItemFooter}</div>` : ''}
          </div>
        `})}
        </div>
      `}

      ${this.templateDescription()}

    </div>`
  }

  render () {
    return this.form.render()
  }

}

