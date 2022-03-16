import { Textarea } from './Textarea'
import { init } from "../vendor/pell";
import { html } from 'uhtml/async'

export class WYSIWYG extends Textarea {

  protected editor
  protected state = 'wysiwyg'

  item () {
    
    let textValue = this.value?.['@value'] ?? ''
    if (typeof textValue === 'string') textValue.trim()

    if (!this.editor) {
      const element: HTMLDivElement = document.createElement('div')
      element.classList.add('wysiwyg-wrapper')
      this.editor = init({
        element: element,
        actions: [
          'bold',
          'italic',
          'ulist',
          'heading1',
          'heading2',
          'paragraph',
          'link',
          {
            icon: '&#9998;',
            title: 'Switch to HTML',
            result: () => {
              this.state = 'html'
              this.render()
            }
          },

        ],
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

    return this.state === 'wysiwyg' ? this.editor : html`
      <button class="button primary switch-editor" onclick=${async () => {
        this.state = 'wysiwyg'
        await this.render()
        this.editor.content.innerHTML = this.value?._
      }}>${this.t`Switch to editor`}</button>
      ${super.item()}
    `
  }

  valueDisplay () {
    return html`<div ref=${element => element.innerHTML = this.value?._}></div>`
  }
}
