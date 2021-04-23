import { ElementBase } from './ElementBase'

export class Url extends ElementBase {
  constructor (...args) {
    super(...args)
    this.attributes.type = 'url'
  }
}