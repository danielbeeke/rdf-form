import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { ElementBase } from './ElementBase'

export class LanguagePicker extends ElementBase {

  item () {
    return html`
    <div class="item">
      language picker
    </div>`
  }

}