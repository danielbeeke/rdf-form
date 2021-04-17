import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'

export class Wrapper extends ElementBase {

  constructor (...args) {
    super(...args)
  }

  input () { return html`` }

}