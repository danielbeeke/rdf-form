import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'

export class Group extends ElementBase {

  item (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
    ${childTemplates}
    ${this.removeButton()}
    </div>`
  }

}