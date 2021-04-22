import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'

export class Unknown extends ElementBase {
  input () {
    return html`Unknown field type <b>${this.definition['form:widget']?._}</b>`
  }
}