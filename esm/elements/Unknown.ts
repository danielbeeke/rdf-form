import { ElementBase } from './ElementBase'
import { html } from 'uhtml/esm/async'

export class Unknown extends ElementBase {
  input () {
    console.log(this.definition)
    return html`Unknown field type <b>${this.definition['form:widget']?._}</b>`
  }
}