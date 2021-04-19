import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { Language } from '../core/Language'

export class Group extends ElementBase {

  item (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
    ${childTemplates}
      ${this.removeButton()}
    </div>`
  }

  async addItem () {
    const firstItem = this.parentValues[this.mainBinding][0].$
    const clone = JSON.parse(JSON.stringify(firstItem))

    for (const [field, values] of Object.entries(clone)) {
      if (values[0]['@id']) values[0]['@id'] = null
      if (values[0]['@value']) values[0]['@value'] = ''
      if (values[0]['@language']) values[0]['@value'] = Language.l10nLanguage
    }

    this.parentValues?.[this.mainBinding].push(clone)
    this.value = clone
  }

}