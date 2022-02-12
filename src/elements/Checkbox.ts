import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'

export class Checkbox extends ElementBase {

  async on (event) {
    if (['click'].includes(event.type)) {
      if (!this.value) await this.addItem()
      this.value[`@${this.jsonldKey}`] = this.definition['form:translatable']?._ ? event.target.checked.toString() : event.target.checked
      this.dispatchChange()
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