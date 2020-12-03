import { Language } from './LanguageService'
import { asArray } from './Helpers'

export class FieldValues {

  private bindingValues = new Map<string, any>()
  private bindings: Array<any>
  private defaultBinding: string

  constructor (initialValues, binding) {
    this.bindings = asArray(binding)
    this.defaultBinding = this.bindings[0].toString()

    for (const binding of this.bindings) {
      this.bindingValues.set(binding.toString(), asArray(initialValues[binding]) ?? [])
    }
  }

  get (index = 0) {
    return this.bindingValues.get(this.defaultBinding)[index]
  }

  get hasTranslations () {
    return !!this.bindingValues.get(this.defaultBinding)[0]?.['@language']
  }

  set (index, value) {
    const values = this.bindingValues.get(this.defaultBinding) ?? []
    values[index] = value
    this.bindingValues.set(this.defaultBinding, values)
  }

  get anotherTranslationIsPossible () {
    const usedLanguagesCount = this.bindingValues.get(this.defaultBinding).map(value => value?.['@language']).length
    const i10nLanguagesCount = Object.keys(Language.i10nLanguages).length
    return this.hasTranslations && usedLanguagesCount < i10nLanguagesCount
  }

  get length () {
    return this.bindingValues.get(this.defaultBinding).length
  }

  getAll () {
    return this.bindingValues.get(this.defaultBinding)
  }

  addTranslation () {
    let usedLanguages = this.bindingValues.get(this.defaultBinding).map(value => value['@language'])
    let unusedLanguages = Object.keys(Language.i10nLanguages).filter(language => !usedLanguages.includes(language))

    if (unusedLanguages.length) {
      const values = this.bindingValues.get(this.defaultBinding)
      values.push({ '@value': '', '@language': unusedLanguages.shift() })
      this.bindingValues.set(this.defaultBinding, values)
    }
  }

  addItem () {
    const values = this.bindingValues.get(this.defaultBinding)

    if (typeof this.bindingValues[0] === 'object') {
      const newItem = Object.assign({}, this.bindingValues[0], { '@value': '' })
      if (newItem['@id']) newItem['@id'] = ''
      values.push(newItem)
    }
    else {
      values.push('')
    }
    this.bindingValues.set(this.defaultBinding, values)
  }

  removeItem (index) {
    const values = this.bindingValues.get(this.defaultBinding)
    values.splice(index, 1)
    this.bindingValues.set(this.defaultBinding, values)
  }

  enableTranslations () {
    const values = this.bindingValues.get(this.defaultBinding) ?? []
    for (const [index, value] of values.entries()) {
      if (typeof value === 'object') {
        values[index]['@language'] = Language.current
      }
      else {
        values[index] = {
          '@value': this.bindingValues[index],
          '@language': Language.current
        }
      }
    }

    if (!values.length) {
      this.bindingValues[0] = {
        '@value': '',
        '@language': Language.current
      }
    }

    this.bindingValues.set(this.defaultBinding, values)
  }

  removeTranslations () {
    let values = this.bindingValues.get(this.defaultBinding)
    if (values?.[0]?.['@language']) {
      values = [values?.[0]?.['@value']]
    }

    this.bindingValues.set(this.defaultBinding, values)
  }

  /**
   * TODO problematic.. maybe split up into setId and setValue
   * @param value
   * @param index
   */
  setValue (value, index) {
    const values = this.bindingValues.get(this.defaultBinding)
    if (!value) return

    if (typeof values[index]?.['@value'] !== 'undefined') {
      values[index]['@value'] = value
    }
    else if (typeof this.bindingValues[index]?.['@id'] !== 'undefined') {
      values[index]['@id'] = value
    }
    else {
      values[index] = value
    }

    this.bindingValues.set(this.defaultBinding, values)
  }

}
