import { ElementBase } from './ElementBase'
import { attributesDiff } from '../helpers/attributesDiff'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'

export class String extends ElementBase {
  input () {
    const parentIsGroup = this.parent?.definition?.['form:widget']?._ === 'group'

    return html`
      <input 
        ref=${attributesDiff(this.attributes)} 
        .value=${this.value?._ ?? ''} 
        onchange=${(event) => this.on(event)}
        onkeyup=${(event) => this.on(event)}
      />

      ${parentIsGroup ? html`` : this.removeButton()}
    `
  }
}