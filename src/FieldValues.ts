import { Language } from './LanguageService'

export class FieldValues {

  private values: Array<any>

  constructor (initialValues) {
    this.values = Array.isArray(initialValues) ? initialValues : [initialValues]
  }

  get (index = 0) {
    return this.values?.[index]
  }

  get hasTranslations () {
    return !!this.values?.[0]?.['@language']
  }

  set (index, value) {
    this.values[index] = value
  }

  get anotherTranslationIsPossible () {
    const usedLanguagesCount = this.values.map(value => value?.['@language']).length
    const i10nLanguagesCount = Object.keys(Language.i10nLanguages).length
    return this.hasTranslations && usedLanguagesCount < i10nLanguagesCount
  }

  get length () {
    return this.values.length
  }

  getAll () {
    return this.values
  }

  addTranslation () {
    let usedLanguages = this.values.map(value => value['@language'])
    let unusedLanguages = Object.keys(Language.i10nLanguages).filter(language => !usedLanguages.includes(language))

    if (unusedLanguages.length) {
      this.values.push({ '@value': '', '@language': unusedLanguages.shift() })
    }
  }

  addItem () {
    if (typeof this.values[0] === 'object') {
      const newItem = Object.assign({}, this.values[0], { '@value': '' })
      if (newItem['@id']) newItem['@id'] = ''
      this.values.push(newItem)
    }
    else {
      this.values.push('')
    }
  }

  removeItem (index) {
    this.values.splice(index, 1)
  }

  enableTranslations () {
    for (const [index, value] of this.values.entries()) {
      if (typeof value === 'object') {
        this.values[index]['@language'] = Language.current
      }
      else {
        this.values[index] = {
          '@value': this.values[index],
          '@language': Language.current
        }
      }
    }

    if (!this.values.length) {
      this.values[0] = {
        '@value': '',
        '@language': Language.current
      }
    }
  }

  removeTranslations () {
    if (this.values?.[0]?.['@language']) {
      this.values = [this.values?.[0]?.['@value']]
    }
  }

  setValue (value, index) {
    if (!value) return

    if (typeof this.values[index]?.['@value'] !== 'undefined') {
      this.values[index]['@value'] = value
    }
    else if (typeof this.values[index]?.['@id'] !== 'undefined') {
      this.values[index]['@id'] = value
    }
    else {
      this.values[index] = value
    }
  }

}
