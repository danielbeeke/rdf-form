/**
 * Fetches languages according to BCP47
 *
 * Provides a way to get language names by langCodes.
 */

export let languages = []
let isRunning: Promise<any> | boolean = false

export const ensureLanguages = async () => {
  if (!languages.length) {
    const response = await fetch('https://r12a.github.io/app-subtags/languages.js')
    const file = 'export ' + await response.text()
    const encodedJs = encodeURIComponent(file);
    const dataUri = 'data:text/javascript;charset=utf-8,' + encodedJs;
    const data = await import(dataUri);
    languages = data.languages
  }
}

export const getLanguageLabel = async (langCode) => {
  !isRunning ? isRunning = ensureLanguages() : await isRunning
  const language = languages.find(language => language.subtag === langCode)
  return language?.description ?? langCode
}

export const filterLanguages = async (search) => {
  !isRunning ? isRunning = ensureLanguages() : await isRunning
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
