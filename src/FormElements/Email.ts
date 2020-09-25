import {html} from "uhtml";
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'

export class Email extends FormElementBase implements FormElement {

  static type: string = 'email'

  templateItem (quad) {
    const jsonQuad = quad.toJSON ? quad.toJSON() : quad
    const languageCode = jsonQuad.object?.language
    let selectedLanguage = this.languages.find(language => language.language === languageCode)

    return html.for(quad)`
      <div class="field-item">
        <input
        onchange="${event => this.on('change', event, quad)}"
        onkeyup="${event => this.on('keyup', event, quad)}"
        type="email" value="${jsonQuad.object.value.replace('mailto:', '')}">
        ${languageCode ?
      selectedLanguage && this.translationsEnabled ? this.languageSelector(languageCode, () => {}, quad) : html`<span>${languageCode}</span>`
      : ''}
        ${this.templateItemActions(quad)}
      </div>
    `
  }

}
