import { I10n } from './i10n'

let current = null
let fallback = null
let uiLanguages: object
let i10nLanguages: object

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
    t = await I10n(languageCode, Object.keys(this.i10nLanguages))
    this.dispatchEvent(new CustomEvent('language-change'))
  }

  set i10nLanguages (languages) {
    i10nLanguages = languages
  }

  get i10nLanguages () {
    return i10nLanguages
  }

  set uiLanguages (languages) {
    uiLanguages = languages
  }

  get uiLanguages () {
    return uiLanguages
  }

  multilingualValue (values) {
    const currentLanguageMatch = values.find(value => value['@language'] === this.current)
    const fallbackLanguageMatch = values.find(value => value['@language'] === this.fallback)
    return currentLanguageMatch?.['@value'] ?? fallbackLanguageMatch?.['@value'] ?? values
  }
}

export const Language = new LanguageService()
export let t: any

