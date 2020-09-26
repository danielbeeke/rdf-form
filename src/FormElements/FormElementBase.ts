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
  private predicate: string
  private predicateMeta: any

  public childFormElements: Array<any> = []

  public wrapperClasses: Array<string> = ['form-element']
  public labelClasses: Array<string> = ['form-element-label']
  public itemClasses: Array<string> = ['form-element-item']
  public childrenClasses: Array<string> = ['form-element-child']
  public childItemClasses: Array<string> = ['form-element-children']
  public languageSelectorClasses: Array<string> = ['form-element-language-selector']

  constructor (data, predicate, predicateMeta, rdfForm: RdfForm) {
    super()
    this.form = rdfForm
    this.predicate = predicate
    this.predicateMeta = predicateMeta
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

    delete this.data
  }

  get label () {
    const label = this?.predicateMeta?.label?.[this.form.language] ?? this?.predicateMeta?.label?.default
    return label ? label.charAt(0).toUpperCase() + label.slice(1) : ''
  }

  get description () {
    const comment = this?.predicateMeta?.comment?.[this.form.language] ?? this?.predicateMeta?.comment?.default
    return comment ? comment.charAt(0).toUpperCase() + comment.slice(1) : ''
  }

  templateLabel () {
    return this.label ? html`
    <label class="${this.labelClasses.join(' ')}">
      ${this.label}
      ${this.templateDescription()}
    </label>` : ''
  }

  templateDescription () {
    return this.description ? html`
    <span class="field-description-tooltip-toggle">
      <i class="fas fa-question-circle"></i>
      <small class="field-description-tooltip">
        ${this.description}
      </small>
    </span>` : ''
  }

  templateItem (index, value) {
    const textValue = value?.['@value'] ?? value
    return html`<input type="text" value="${textValue}">`
  }

  templateLanguageSelector (value) {
    const selectedLanguage = value['@language']

    return html`
    <select onchange="${event => value['@language'] = event.target.value}" class="${this.languageSelectorClasses.join(' ')}">
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
    <div class="${this.wrapperClasses.join(' ')}">

        ${this.templateLabel()}

        ${this?.values ? this.values.map((value, index) => html`
          <div class="${this.itemClasses.join(' ')}">
            ${value?.['@language'] ? this.templateLanguageSelector(value) : ''}
            ${this.templateItem(index, value)}
          </div>
        `) : ''}

        ${this.childFormElements.length ? html`
          <div class="${this.childrenClasses.join(' ')}">
            ${this.childFormElements.map(childFormElementId => html`
              <div class="${this.childItemClasses.join(' ')}">
                ${this[childFormElementId].render()}
              </div>
            `)}
          </div>
        ` : ''}

    </div>`
  }

  render () {
    console.log('element render')
    return this.templateWrapper()
  }

}

