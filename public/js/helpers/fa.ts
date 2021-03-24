import { icon } from '../vendor/fontawesome-svg-core.js'
import { Hole } from '../vendor/uhtml.js'

class FaIcon extends Hole {
  constructor(icon) {
    /** @ts-ignore */
    super('svg', [icon], []);
  }
}
export function fa (iconInput) {
  return new FaIcon(icon(iconInput).html[0])
}
