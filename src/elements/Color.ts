import { ElementBase } from './ElementBase'

export class Color extends ElementBase {
  constructor (...args) {
    super(...args)
    this.attributes.type = 'color'
  }
}