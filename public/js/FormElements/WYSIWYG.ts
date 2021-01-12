import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { exec, init } from "../vendor/pell";

export class WYSIWYG extends FormElementBase implements FormElement {

  static type: string = 'wysiwyg'

  private editor: any = null

  async templateItem (index, value) {
    let textValue = value?.['@value'] ?? value ?? ''
    if (typeof textValue === 'string') textValue.trim()

    const initEditor = (element) => {
      if (!this.editor) {
        this.editor = init({
          element: element,
          defaultParagraphSeparator: 'p',
          onChange: html => this.Values.set(html, index),
        })

        element.content.innerHTML = textValue
      }
    }

    return this.html`
      <div id="editor" ref="${initEditor}"></div>
    `
  }
}
