/**
 * Language service
 * The t function get be imported to do translations.
 * Using it as template literal with t`Lorem Ipsum` returns a Hole for uHtml,
 * Using t.direct('Lorem Ipsum') returns a string.
 */

import { I18n } from './i18n'

let current = null
let fallback = null
let uiLanguages: object
let l10nLanguages: object
let currentL10nLanguage: string

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

  set currentL10nLanguage (langCode) {
    currentL10nLanguage = langCode
  }

  get currentL10nLanguage () {
    return currentL10nLanguage
  }

  set l10nLanguages (languages) {
    l10nLanguages = languages
    if (!currentL10nLanguage) {
      currentL10nLanguage = Object.keys(l10nLanguages)[0]
    }
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

  /**
   * Helper function to extract a language value of a RDF quad/triple.
   * @param values
   */
  multilingualValue (values) {
    if (!Array.isArray(values)) values = [values]
    const currentLanguageMatch = values.find(value => value['@language'] === this.current)
    const fallbackLanguageMatch = values.find(value => value['@language'] === this.fallback)
    return currentLanguageMatch?.['@value'] ?? fallbackLanguageMatch?.['@value'] ?? values
  }

  /**
   * Extracts the used languages of JSON-ld.
   * @param jsonLd
   */
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

