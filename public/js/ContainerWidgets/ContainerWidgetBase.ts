import { FormElement} from "../Types";
import {lastPart} from "../Helpers";
import { html } from "../vendor/uhtml.js";

export abstract class ContainerWidgetBase {

  readonly formElements: Array<FormElement>
  readonly definition: any
  public html: any

  constructor(definition: any, formElements: Array<FormElement> = []) {
    this.definition = definition
    this.formElements = formElements
    this.sortFormElements()
    this.html = html
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
    return this.html`<div class="${'container ' + name}">
      ${await Promise.all(this.formElements.map(formElement => formElement.templateWrapper()))}
    </div>`
  }
}
