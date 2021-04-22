import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'

export class Container extends ElementBase {

  input () { return html`` }

  wrapper (innerTemplates: Array<typeof html> = []) {
    return html`${innerTemplates}`
  }
}