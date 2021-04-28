import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'

export class Details extends ElementBase {

  input () { return html`` }

  wrapper (innerTemplates: Array<typeof html> = []) {
    const toggle = () => {
      this.wrapperAttributes.open = !this.wrapperAttributes.open
    }

    const type = kebabize(this.constructor.name)
    return html`
    <details ref=${attributesDiff(this.wrapperAttributes)} type="${type}">
      <summary onclick=${toggle}>${this.label()}</summary>
      ${innerTemplates.length ? html`
        <div class="items">
          ${innerTemplates}
        </div>
      ` : ''}
    </div>`
  }
}