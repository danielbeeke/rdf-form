import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'

export class Checkbox extends ElementBase {

  async on (event) {
    if (['click'].includes(event.type)) {
      if (!this.value) await this.addItem()
      this.value[`@${this.jsonldKey}`] = this.definition['form:translatable']?._ && this.value['@language'] ? event.target.checked.toString() : event.target.checked
      this.dispatchChange()
      this.render()
    }
  }

  disableLanguage () {
    super.disableLanguage()
    const values = this.parentValues[this.mainBinding]
    if (values?.[0]?.['@value']) {
      values[0]['@value'] = values[0]['@value'] === 'true'
    }
  }

  input () {
    const checked = this.value?._ === true || this.value?._ === 'true'

    return html`
    <label class="switch">
      <input
        onclick=${event => this.on(event)}
        type="checkbox"
        .checked="${checked}"
      >
      <span class="slider"></span>
    </label>
    `
  }

  get removable () {
    if (this.definition?.['form:removable']?._ === false) return false
    const hasValue = this.value?._
    const parentIsGroup = this.parent instanceof ElementBase ? this.parent?.definition?.['form:widget']?._ === 'group' : false
    const isGroup = this.definition?.['form:widget']?._ === 'group'
    const isRequired = this.definition?.['form:required']?._
    
    return !isRequired && hasValue && (!parentIsGroup || isGroup)
  }

}