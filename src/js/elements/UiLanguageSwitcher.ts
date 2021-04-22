import { ElementBase } from './ElementBase'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { Language, t } from '../core/Language'
export class UiLanguageSwitcher extends ElementBase {

  input () {
    return html`
      <select onchange="${async event => {
        await Language.setUiLanguage(event.target.value)
        this.dispatchEvent(new CustomEvent('language-change'))
        await this.render()
      }}" class="language-switcher">
        ${Object.entries(Language.uiLanguages).map((language) => {
          const code = language[0]
          const label = language[1]
          return html`<option value="${code}" selected="${code === Language.uiLanguage ? true : null}">${label}</option>`
        })}
      </select>
    `
  }

  wrapper (innerTemplates: Array<typeof html> = []) {
    return Object.keys(Language.uiLanguages).length > 1 ? super.wrapper(innerTemplates) : html``
  }
}