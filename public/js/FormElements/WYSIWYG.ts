import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { exec, init } from "../vendor/pell";

export class WYSIWYG extends FormElementBase implements FormElement {

  static type: string = 'wysiwyg'

  private editors: Map<string, any> = new Map()

  async templateItem (index, value) {
    const language = value?.['@language'] ?? ''
    let textValue = value?.['@value'] ?? value ?? ''
    if (typeof textValue === 'string') textValue.trim()

    if (!this.editors.get(language)) {
      const element: HTMLDivElement = document.createElement('div')
      this.editors.set(language, init({
        element: element,
        defaultParagraphSeparator: 'p',
        onChange: html => this.Values.set({'@value': html, '@language': language}, index),
      }))

      /** @ts-ignore */
      element.content.innerHTML = textValue
    }

    return this.editors.get(language)
  }
}
