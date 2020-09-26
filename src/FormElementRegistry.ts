import { RdfForm } from './RdfForm'

export class FormElementRegistry {

  private form: RdfForm
  readonly elements: Array<any> = []

  constructor(rdfForm: RdfForm ) {
    this.form = rdfForm
  }

  register (...formElements: any) {
    this.elements.push(...formElements)
  }

  get (type: string, predicate, data, predicateMeta) {
    const formElement = this.elements.find(element => element.type === type)
    if (formElement) return new formElement(data, predicate, predicateMeta, this.form)
    else throw new Error('Could not find: ' + type)
  }

}
