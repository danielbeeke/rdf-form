import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'

export class Details extends ElementBase {

  constructor (...args) {
    super(...args)

    this.wrapperAttributes.open = true
  }

  item (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
      ${childTemplates.length ? html`
      <div class="children">
        ${childTemplates}
      </div>
    ` : ''}
    </div>`
  }

  wrapper (innerTemplates: Array<typeof html> = []) {
    const type = kebabize(this.constructor.name)
    return html`
    <details ref=${attributesDiff(this.wrapperAttributes)} type="${type}">
      <summary>${this.label()}</summary>
      ${innerTemplates.length ? html`
        <div class="inner">
          ${innerTemplates}
        </div>
      ` : ''}
    </div>`
  }
}