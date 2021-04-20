import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'

export class Checkbox extends ElementBase {

  async on (event) {
    if (['click'].includes(event.type)) {
      if (!this.value) await this.addItem()
      this.value[`@${this.jsonldKey}`] = event.target.checked
    }
  }

  input () {
    const checked = this.value?._

    return html`
    <label class="switch">
      <input
        onclick=${event => this.on(event)}
        type="checkbox"
        .checked="${checked}"
      >
      <span class="slider"></span>
    </label>
    `
  }

}