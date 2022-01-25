import { ElementBase } from './ElementBase'
import { html } from 'uhtml/esm/async'
import { lastPart } from '../helpers/lastPart'

export class Url extends ElementBase {
  constructor (...args) {
    super(...args)
    this.attributes.type = 'url'
  }

  valueDisplay () {
    return html`<a target="_blank" href=${this.value?._}>${lastPart(this.value?._)}</a>`
  }
}