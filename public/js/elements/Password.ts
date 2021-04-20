import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
export class Password extends ElementBase {

  protected password: string = ''
  protected passwordConfirm: string = ''

  async item () {
    return html`
    <input
      onchange="${event => this.on(event)}"
      onkeyup="${event => this.password = event.target.value}"
      type="password"
      autocomplete="off"
    >

    <input
      onchange="${event => this.on(event)}"
      onkeyup="${event => this.passwordConfirm = event.target.value}"
      type="password"
      autocomplete="off"
    >
`
  }

}