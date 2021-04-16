import { languages } from './languages'
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
