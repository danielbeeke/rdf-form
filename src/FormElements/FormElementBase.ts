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

    if (label) {
      return label.charAt(0).toUpperCase() + label.slice(1)
    }

    return ''
  }

  get description () {
    const comment = this?.predicateMeta?.comment?.[this.form.language] ?? this?.predicateMeta?.comment?.default

    if (comment) {
      return comment.charAt(0).toUpperCase() + comment.slice(1)
    }

    return ''
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

  templateWrapper () {
    return html`
    <div class="${this.wrapperClasses.join(' ')}">

        ${this.templateLabel()}

    </div>`
  }

  render () {
    return this.templateWrapper()
  }

}

