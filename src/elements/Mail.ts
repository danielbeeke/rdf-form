import { ElementBase } from './ElementBase'

export class Mail extends ElementBase {
  constructor (...args) {
    super(...args)
    this.attributes.type = 'mail'
  }
}