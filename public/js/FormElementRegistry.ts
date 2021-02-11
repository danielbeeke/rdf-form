import { FieldDefinitionOptions } from './Types'
import { FieldValues } from './FieldValues'

/**
 * Keeps track of all the possible FormElements.
 */
export class FormElementRegistry {

  readonly elements: Array<any> = []
  readonly renderCallback: any

  constructor(renderCallback) {
    this.renderCallback = renderCallback
  }

  register (...formElements) {
    this.elements.push(...formElements)
  }

  get (type: string, field, children: Map<string, FieldDefinitionOptions>, values: FieldValues, comunica, formPrefix, jsonLdContext) {
    const formElement = this.elements.find(element => element.type === type)
    if (formElement) return new formElement(field, values, children, this.renderCallback, comunica, formPrefix, jsonLdContext)
    else console.error('Could not find FormElement: ' + type)
  }

}
