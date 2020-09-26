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
  public childFormElements: Array<any> = []
  public wrapperClasses: Array<string> = ['form-element']

  constructor (data, predicate, rdfForm: RdfForm) {
    super()
    this.form = rdfForm
    this.predicate = predicate
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

  templateWrapper () {
    return html`
    <div class="${this.wrapperClasses.join(' ')}">

    </div>`
  }

  render () {
    return this.templateWrapper()
  }

}

