import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'

export class Group extends ElementBase {

  constructor (...args: any[]) {
    super(...args)
    if (!this.value) {
      this.addItem()
      this.removeItem()
    }
  }

  item (childTemplates: Array<typeof html> = []) {

    return html`
    <div class="item">
    ${childTemplates}
    ${this.removeButton()}
    </div>`
  }

}