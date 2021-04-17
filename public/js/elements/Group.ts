import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'

export class Group extends ElementBase {

  item (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
      ${childTemplates.length ? html`
      <div class="children">
        ${childTemplates}
      </div>
    ` : ''}

    </div>`
  }
}