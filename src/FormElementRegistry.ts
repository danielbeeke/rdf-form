import { RdfForm } from './RdfForm'

/**
 * Keeps track of all the possible FormElements.
 */
export class FormElementRegistry {

  readonly form: RdfForm
  readonly elements: Array<any> = []

  constructor(rdfForm: RdfForm ) {
    this.form = rdfForm
  }

  register (...formElements: any) {
    this.elements.push(...formElements)
  }

  get (type: string, field) {
    const formElement = this.elements.find(element => element.type === type)
    if (formElement) return new formElement(field, this.form)
    else throw new Error('Could not find FormElement: ' + type)
  }

}
