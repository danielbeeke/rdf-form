import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { attributesDiff } from '../helpers/attributesDiff'

export class Textarea extends ElementBase {
  input () {
    let textValue = this.value?._ ?? ''
    if (typeof textValue === 'string') textValue.trim()

    return html`
    <textarea
      ref=${attributesDiff(this.attributes)} 
      onchange="${event => this.on(event)}"
      onkeyup="${event => this.on(event)}"
     .value="${textValue}"></textarea>`
  }

}