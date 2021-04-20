import { ElementBase } from './ElementBase'

export class Date extends ElementBase {
  constructor (...args) {
    super(...args)
    this.attributes.type = 'url'
  }
}