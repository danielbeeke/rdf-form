import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Checkbox extends FormElementBase implements FormElement {

  static type: string = 'checkbox'

  async templateItem (index, value, placeholder = null) {
    const checked = value?.['@' + this.jsonLdValueType] === 'true' ? true : null

    return this.html`
    ${this.html`
    <label class="switch">
      <input
        onclick="${event => this.on(event, index)}"
        type="checkbox"
        .checked="${checked}"
        placeholder="${placeholder ?? this.Field.placeholder}"
        required="${this.isRequired(index)}">
      <span class="slider"></span>
    </label>
    `}
    `
  }

  /**
   * TODO problematic with serialize. What do we really want? off / on and unset? or just off / on?
   * @param event
   * @param index
   */
  on (event, index) {
    if (['click'].includes(event.type)) {
      const value = {}
      value['@' + this.jsonLdValueType] = event?.target?.checked ? 'true' : 'false'
      if (this.Values.hasTranslations) {
        value['@language'] = this.Values.get(index)['@language']
      }
      this.Values.set(value, index)
    }

    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }
}
