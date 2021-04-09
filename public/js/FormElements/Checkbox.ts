import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { Language} from '../LanguageService'

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
   * @param event
   * @param index
   */
  on (event, index) {
    if (['click'].includes(event.type)) {
      this.Values.setValue(event?.target?.checked ? 'true' : 'false', index)
    }

    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }

  async serialize () {
    let values = this.Values.getAllFromBinding()

    if (this.Field.saveEmptyValue) {
      if (this.Values.hasTranslations) {
        const missingLanguages = Object.keys(Language.l10nLanguages).filter(langCode => !values.find(value => value['@language'] === langCode))
        
        for (const missingLanguage of missingLanguages) {
          this.Values.set({
            '@language': missingLanguage,
            '@value': 'false'
          }, values.length)
        }
      }
      else {
        if (!values.length) {
          this.Values.setValue('false', 0)  
        }
      }

      values = this.Values.getAllFromBinding()
    }

    return values.length ? values : null
  }
}
