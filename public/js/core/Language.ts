import { CoreComponent } from '../types/CoreComponent'
import { languages } from '../languages'
/**
 * Fetches languages according to BCP47
 *
 * Provides a way to get language names by langCodes.
 */

export const getLanguageLabel = async (langCode) => {
  const language = languages.find(language => language.subtag === langCode)
  return language?.description ?? langCode
}

export const filterLanguages = async (search) => {
  if (!search) return []
  return languages.filter(language => language.description.toLowerCase().includes(search.toLowerCase()))
}

export const langCodesToObject = async (langCodes: Array<string>) => {
  const languages = {}
  for (const langCode of langCodes) {
    languages[langCode] = await getLanguageLabel(langCode)
  }
  return languages
}

/**
 * Language service
 * The t function get be imported to do translations.
 * Using it as template literal with t`Lorem Ipsum` returns a Hole for uHtml,
 * Using t.direct('Lorem Ipsum') returns a string.
 */

 import { I18n } from './i18n'

 let currentUiLanguage = 'en'
 let currentL10nLanguage: string
 let uiLanguages: object = { 'en': 'English' }
 let l10nLanguages: object = { 'en': 'English' }
 
export class LanguageService extends EventTarget implements CoreComponent {
  
  public ready: boolean = false

  constructor () {
    super()
  }

  async init (rdfForm) {
    await this.setUiLanguage('en')

    rdfForm.formData.addEventListener('ready', async () => {
      const usedLanguages = await this.extractUsedLanguages(rdfForm.formData.proxy)

      const defaultLanguages = JSON.parse(rdfForm.getAttribute('languages')) ?? (
        usedLanguages.length ? await langCodesToObject(usedLanguages) : {}
      )

      this.l10nLanguages = JSON.parse(rdfForm.getAttribute('l10n-languages')) ?? Object.assign({}, defaultLanguages)

      if (rdfForm.getAttribute('selected-l10n-language') && rdfForm.getAttribute('selected-l10n-language') in this.l10nLanguages) {
        this.l10nLanguage = rdfForm.getAttribute('selected-l10n-language')
      }

      this.uiLanguages = JSON.parse(rdfForm.getAttribute('ui-languages')) ?? {}
      await this.setUiLanguage(rdfForm.getAttribute('selected-language') ?? 'en')

      this.ready = true
      this.dispatchEvent(new CustomEvent('ready'))  
    }, { once: true})
  }

   get uiLanguage () {
     return currentUiLanguage
   }

   async setUiLanguage (languageCode) {
    currentUiLanguage = languageCode
     t = await I18n(languageCode, 'RdfForm', Object.keys(this.uiLanguages))
     this.dispatchEvent(new CustomEvent('language-change'))
   }
 
   set l10nLanguage (langCode) {
     currentL10nLanguage = langCode
   }
 
   get l10nLanguage () {
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
       this.dispatchEvent(new CustomEvent('this.added', {
         detail: langCode
       }))
     }
 
     for (const langCode of languageCodesToDelete) {
       this.dispatchEvent(new CustomEvent('this.removed', {
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
   multilingualValue (values, type = 'ui') {
     if (!Array.isArray(values)) values = [values]
     const currentLanguageMatch = values.find(value => value['@language'] === (type === 'ui' ? this.uiLanguage : this.l10nLanguage))
     const fallbackNoLanguageMatch = values.find(value => !value['@language'])
     return currentLanguageMatch?.['@value'] ?? fallbackNoLanguageMatch?.['@value'] ??
     currentLanguageMatch?.['@id'] ?? fallbackNoLanguageMatch?.['@id']
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
 
 