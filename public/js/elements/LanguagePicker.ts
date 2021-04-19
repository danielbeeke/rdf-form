import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { ElementBase } from './ElementBase'
import { Language, t } from '../core/Language'
import { langCodesToObject, filterLanguages } from '../getLanguageLabel'
import { SlimSelect } from '../vendor/slimselect.js'

export class LanguagePicker extends ElementBase {

  protected initiated = false

  item () {
    const onChange = async (event) => {
      if (!this.initiated) return
      const selectedLanguages = event.currentTarget.slim.selected()
      Language.l10nLanguages = await langCodesToObject(selectedLanguages)
      this.render()
    }

    const attachSlimSelect = (select) => {
      if (select.slim) return

      const initialLanguages = [...Object.entries(Language.l10nLanguages)]

      const slimSelect = new SlimSelect({
        select: select,
        ajax: async function (search, callback) {
          const languages = await filterLanguages(search)
          const options = languages.map(language => {
            return {
              text: Language.l10nLanguages?.[language.subtag] ?? language.description,
              value: language.subtag,
            }
          })

          callback(options)
        }
      })

      const selection = initialLanguages.map(([langCode, language]) => {
        return {
          text: Language.l10nLanguages[langCode] ?? language,
          value: langCode
        }
      })

      slimSelect.setData(selection)
      slimSelect.set(selection.map(option => option.value))
      this.initiated = true // Without this it would trigger a needless render.
    }

    return html`
    <div class="item">
      <select multiple onchange=${onChange} ref=${attachSlimSelect}></select>
    </div>`
  }

}