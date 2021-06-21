import { Hole } from 'uhtml/async'
import { icon } from '../vendor/fontawesome-svg-core.js'

class FaIcon extends Hole {
  constructor(icon) {
    super('svg', [icon], []);
  }
}
export function fa (iconInput) {
  return new FaIcon(icon(iconInput).html[0])
}
