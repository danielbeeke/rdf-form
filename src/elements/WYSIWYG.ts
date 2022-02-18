import { ElementBase } from './ElementBase'
import { init } from "../vendor/pell";
import { html } from 'uhtml/async'

export class WYSIWYG extends ElementBase {

  protected editor

  item () {
    let textValue = this.value?.['@value'] ?? ''
    if (typeof textValue === 'string') textValue.trim()

    if (!this.editor) {
      const element: HTMLDivElement = document.createElement('div')
      element.classList.add('wysiwyg-wrapper')
      this.editor = init({
        element: element,
        defaultParagraphSeparator: 'p',
        onChange: async html => {
          if (!this.value) await this.addItem()
          this.value['@value'] = html
          this.dispatchChange()
        },
      })

      /** @ts-ignore */
      element.content.innerHTML = textValue
    }

    return this.editor
  }

  valueDisplay () {
    return html`<div ref=${element => element.innerHTML = this.value?._}></div>`
  }
}
