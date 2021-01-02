import { FormElement} from "../Types";
import {Classy} from "../Classy";
import {lastPart} from "../Helpers";

export abstract class ContainerWidgetBase {

  readonly formElements: Array<FormElement>
  readonly definition: any
  public html: any

  constructor(definition: any, formElements: Array<FormElement> = []) {
    this.definition = definition
    this.formElements = formElements
    this.sortFormElements()
    this.html = Classy
  }

  addFormElement (formElement: FormElement) {
    this.formElements.push(formElement)
    this.sortFormElements()
  }

  sortFormElements () {
    this.formElements.sort((a, b) => a.Field.order - b.Field.order)
  }

  async render () {
    const name = this.definition?.['@id'] ? lastPart(this.definition['@id']) : 'default'
    return this.html.for(this)`<div class="${'container ' + name}">
      ${await Promise.all(this.formElements.map(formElement => formElement.templateWrapper()))}
    </div>`
  }
}
