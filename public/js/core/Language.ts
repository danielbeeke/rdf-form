import { CoreComponent } from '../types/CoreComponent'

/**
 * Language service
 * The t function get be imported to do translations.
 * Using it as template literal with t`Lorem Ipsum` returns a Hole for uHtml,
 * Using t.direct('Lorem Ipsum') returns a string.
 */

 import { I18n } from '../i18n'

 let currentUiLanguage = 'en'
 let currentL10nLanguage: string
 let uiLanguages: object = { 'en': 'English' }
 let l10nLanguages: object = { 'en': 'English' }
 
export class LanguageService extends EventTarget implements CoreComponent {
  
  public ready: boolean = false

  constructor () {
    super()
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
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
     const currentLanguageMatch = values.find(value => value['@language'] === this.uiLanguage)
     const fallbackNoLanguageMatch = values.find(value => !value['@language'])
     return currentLanguageMatch?.['@value'] ?? fallbackNoLanguageMatch?.['@value'] ??
     currentLanguageMatch?.['@id'] ?? fallbackNoLanguageMatch?.['@id']
   }
  }
 
 export const Language = new LanguageService()
 export let t: any
 
 