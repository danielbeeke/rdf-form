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

  get (type: string, ...args: any[]) {
    const formElement = this.elements.find(element => element.type === type)
    if (formElement) return new formElement(...args, this.renderCallback)
    else console.error('Could not find FormElement: ' + type)
  }

}
