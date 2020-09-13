import { RdfForm} from './RdfForm'

class FormElementRegistryClass {

  readonly elements: Array<any> = []

  register (formElement: any) {
    this.elements.push(formElement)
  }

  get (type: string, formElementData: any, rdfForm: RdfForm) {
    const formElement = this.elements.find(element => element.type === type)
    if (formElement) return new formElement(formElementData, rdfForm)
  }

}

export const FormElementRegistry = new FormElementRegistryClass()
