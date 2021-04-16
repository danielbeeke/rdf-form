/**
 * Language service
 * The t function get be imported to do translations.
 * Using it as template literal with t`Lorem Ipsum` returns a Hole for uHtml,
 * Using t.direct('Lorem Ipsum') returns a string.
 */

import { I18n } from './i18n'

let current = 'en'
let fallback = 'en'
let uiLanguages: object = { 'en': 'English' }
let l10nLanguages: object = { 'en': 'English' }
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
    t = await I18n(languageCode, 'RdfForm', Object.keys(this.uiLanguages))
    this.dispatchEvent(new CustomEvent('language-change'))
  }

  set currentL10nLanguage (langCode) {
    currentL10nLanguage = langCode
  }

  get currentL10nLanguage () {
    return currentL10nLanguage
  }

  set l10nLanguages (languages) {
    const oldLanguageCodes = Object.keys(l10nLanguages)
    const newLanguageCodes = Object.keys(languages)

    let languageCodesToAdd = newLanguageCodes.filter(x => !oldLanguageCodes.includes(x));
    let languageCodesToDelete = oldLanguageCodes.filter(x => !newLanguageCodes.includes(x));

    if (languageCodesToDelete.includes(currentL10nLanguage)) {
      currentL10nLanguage = newLanguageCodes[0]
    }

    for (const langCode of languageCodesToAdd) {
      this.dispatchEvent(new CustomEvent('language.added', {
        detail: langCode
      }))
    }

    for (const langCode of languageCodesToDelete) {
      this.dispatchEvent(new CustomEvent('language.removed', {
        detail: langCode
      }))
    }

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
    const fallbackNoLanguageMatch = values.find(value => !value['@language'])
    return currentLanguageMatch?.['@value'] ?? fallbackLanguageMatch?.['@value'] ?? fallbackNoLanguageMatch?.['@value'] ?? values
  }

  /**
   * Extracts the used languages of JSON-ld.
   * @param jsonLd
   */
  async extractUsedLanguages (jsonLd: object): Promise<Array<string>> {
    const languageCodes = new Set<string>()
    for (const [predicate, values] of Object.entries(jsonLd)) {
      for (const value of values) {
        if (value?.['@language']) {
          languageCodes.add(value['@language'])
        }
        else if (value?.['@list']) {
          const innerLangCodes  = await this.extractUsedLanguages(value?.['@list'][0]);
          for (const innerLangCode of innerLangCodes) {
            languageCodes.add(innerLangCode)
          }
        }
      }
    }

    return [...languageCodes.values()]
  }
}

export const Language = new LanguageService()
export let t: any

