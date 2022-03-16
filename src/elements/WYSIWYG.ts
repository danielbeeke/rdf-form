import { Textarea } from './Textarea'
import { init } from "../vendor/pell";
import { html } from 'uhtml/async'

const modes = new Map()

export class WYSIWYG extends Textarea {

  protected editor

  item () {
    const id = this.definition['@id'] + (this.index ?? 0)
    const mode = modes.get(id) ?? 'wysiwyg'

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
            result: async () => {
              modes.set(id, 'html')
              await this.render()
            }
          },

        ],
        defaultParagraphSeparator: 'p',
        onChange: async html => {
          if (html) {
            if (!this.value) await this.addItem()
            this.value['@value'] = html  
          }
          else {
            this.removeItem()
          }
          this.dispatchChange()
        },
      })

      /** @ts-ignore */
      element.content.innerHTML = textValue
    }

    return mode === 'wysiwyg' ? this.editor : html`
      <button class="button primary switch-editor" onclick=${async () => {
        modes.set(id, 'wysiwyg')
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
