import { ElementBase } from './ElementBase'

export class Number extends ElementBase {

  constructor (...args) {
    super(...args)
    this.attributes.type = 'number'
  }

  async on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      this.value[`@${this.jsonldKey}`] = parseInt(event.target.value)
    }
  }
}