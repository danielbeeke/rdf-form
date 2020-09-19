import { OntologyRepository } from './OntologyRepository'

export const findInSet = (pred, set) => {
  for (let item of set) if (pred(item)) return item
}

export const filterInSet = (pred, set) => {
  let found = []
  for (let item of set) if (pred(item)) found.push(item)
  return found
}

class LanguageCodesClass {
  public languageCodes = {}
  public cache = []
  private promise = null

  async list (proxy = null) {
    if (this.promise) return this.promise

    this.promise = new Promise(async (resolve, reject) => {
      const quads = await OntologyRepository.dereference('https://id.loc.gov/vocabulary/iso639-1', proxy)

      quads
        .filter(quad => quad.predicate.value === 'http://www.w3.org/2004/02/skos/core#prefLabel')
        .forEach(quad => {
          const langCode = quad.subject.value.split('/')[5]
          if (!this.languageCodes[langCode]) this.languageCodes[langCode] = {
            translations: {},
            language: langCode,
            uri: quad.subject.value
          }
          this.languageCodes[langCode]['translations'][quad.object.language] = quad.object.value
        })

      this.cache = Object.values(this.languageCodes)
      this.cache.sort((a, b) => {
        if (a.translations.en > b.translations.en) return 1
        if (b.translations.en > a.translations.en) return -1
        return 0
      })

      resolve(this.cache)
    })

    return this.promise
  }
}

export const LanguageCodes = new LanguageCodesClass()
