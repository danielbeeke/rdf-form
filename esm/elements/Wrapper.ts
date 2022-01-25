import { ElementBase } from './ElementBase'
import { html } from 'uhtml/esm/async'

export class Wrapper extends ElementBase {

  constructor (...args) {
    super(...args)
  }

  input () { return html`` }

}