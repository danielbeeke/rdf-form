import { I18n } from './i18n'

let current = null
let fallback = null
let uiLanguages: object
let l10nLanguages: object

class LanguageService extends EventTarget {
  get current () {
    return current
  }

  get fallback () {
    return fallback
  }

  set fallback (languageCode) {
    fallback = languageCode
  }

  async setCurrent (languageCode) {
    current = languageCode
    t = await I18n(languageCode, 'RdfForm', Object.keys(this.l10nLanguages))
    this.dispatchEvent(new CustomEvent('language-change'))
  }

  set l10nLanguages (languages) {
    l10nLanguages = languages
  }

  get l10nLanguages () {
    return l10nLanguages
  }

  set uiLanguages (languages) {
    uiLanguages = languages
  }

  get uiLanguages () {
    return uiLanguages
  }

  multilingualValue (values) {
    if (!Array.isArray(values)) values = [values]
    const currentLanguageMatch = values.find(value => value['@language'] === this.current)
    const fallbackLanguageMatch = values.find(value => value['@language'] === this.fallback)
    return currentLanguageMatch?.['@value'] ?? fallbackLanguageMatch?.['@value'] ?? values
  }

  async extractUsedLanguages (jsonLd: object): Promise<Array<string>> {
    const languageCodes = new Set<string>()
    for (const [predicate, values] of Object.entries(jsonLd)) {
      for (const value of values) {
        if (value?.['@language']) languageCodes.add(value['@language'])
      }
    }

    return [...languageCodes.values()]
  }
}

export const Language = new LanguageService()
export let t: any

