import { FormElement} from "../Types";
import {lastPart} from "../helpers/lastPart";
import { html } from "../vendor/uhtml.js";

/**
 * A base class for container widgets.
 * A container holds one or more fields and is placed within a region.
 */
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
