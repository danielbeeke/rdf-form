import { html } from 'uhtml'
import { RdfForm } from '../RdfForm'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faQuestionCircle, faPlus, faLanguage, faCog } from '@fortawesome/free-solid-svg-icons'

dom.watch()
library.add(faTimes, faQuestionCircle, faPlus, faLanguage, faCog)

export class FormElementBase extends EventTarget {

  static type: string = 'base'

  private data: object
  private form: RdfForm
  private values: Array<any>
  private initialValues: Array<any>
  private predicate: string
  private predicateMeta: any
  private uiSettings: any

  public childFormElements: Array<any> = []

  public cssClasses = {
    wrapper: ['form-element', this.constructor['type']],
    item: ['form-element-item'],
    items: ['form-element-items'],
    label: ['form-element-label'],
    children: ['form-element-children'],
    childItem: ['form-element-child'],
    languageSelector: ['form-element-language-selector'],
    description: ['form-element-description']
  }

  constructor (data, predicate, predicateMeta, uiSettings, rdfForm: RdfForm) {
    super()
    this.form = rdfForm
    this.predicate = predicate
    this.predicateMeta = predicateMeta
    this.uiSettings = uiSettings
    this.data = data
  }

  async init () {
    if (Array.isArray(this.data)) {
      this.values = this.data
    }
    else if (typeof this.data === 'string') {
      this.values = [this.data]
    }
    else {
      await this.form.formElementFactory.handleData(this.data, this, this.childFormElements)
    }

    if (this.values) this.initialValues = [...this.values]

    delete this.data
  }

  get label () {
    const label = this.uiSettings?.label ??
      this?.predicateMeta?.label?.[this.form.language] ??
      this?.predicateMeta?.label?.default

    return label ? label.charAt(0).toUpperCase() + label.slice(1) : ''
  }

  get description () {
    const comment = this.uiSettings?.prompt ??
      this?.predicateMeta?.comment?.[this.form.language] ??
      this?.predicateMeta?.comment?.default

    return comment ? comment.charAt(0).toUpperCase() + comment.slice(1) : ''
  }

  isRequired (index) {
    return this.uiSettings?.minValue > 0 && this.uiSettings?.minValue > index
  }

  templateLabel () {
    return this.label ? html`
    <label class="${this.cssClasses.label.join(' ')}">
      ${this.label}
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
      ${Object.entries(this.form.languages).map((language) => {
        const code = language[0]
        const labels = language[1]

        return code === selectedLanguage ? html`
        <option value="${code}" selected>${labels.join(' / ')}</option>
        ` : html`
        <option value="${code}">${labels.join(' / ')}</option>
        `
      })}
    </select>`
  }

  templateWrapper () {
    return html`
    <div class="${this.cssClasses.wrapper.join(' ')}">

      ${this.templateLabel()}

      ${this?.values ? html`
        <div class="${this.cssClasses.items}">
        ${this.values.map((value, index) => html`
          <div class="${this.cssClasses.item.join(' ')}">
            ${this.templateItem(index, value)}
            ${this.values[index]?.['@language'] ? this.templateLanguageSelector(index, value) : ''}
          </div>
        `)}
        </div>
      ` : ''}

      ${this.templateDescription()}

      ${this.childFormElements.length ? html`
        <div class="${this.cssClasses.children.join(' ')}">
          ${this.childFormElements.map(childFormElementId => html`
            <div class="${this.cssClasses.childItem.join(' ')}">
              ${this[childFormElementId].render()}
            </div>
          `)}
        </div>
      ` : ''}

    </div>`
  }

  render () {
    return this.templateWrapper()
  }

}

