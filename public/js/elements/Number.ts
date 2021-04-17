import { ElementBase } from './ElementBase'

export class Number extends ElementBase {

  constructor (...args) {
    super(...args)
    this.attributes.type = 'number'
  }
}