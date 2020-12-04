import { Language } from './LanguageService'
import { asArray } from './Helpers'

export class FieldValues {

  private bindingValues = new Map<string, any>()
  private bindings: Array<any>
  private defaultBinding: string

  constructor (parentValues, binding) {
    this.bindings = asArray(binding)
    this.defaultBinding = this.bindings[0]

    for (const binding of this.bindings) {
      this.bindingValues.set(binding.toString(), parentValues)
    }
  }

  _getValues (binding) {
    const parentValues = this.bindingValues.get(binding.toString())
    return Array.isArray(parentValues) ? parentValues.flatMap(groupItem => groupItem[binding]) : parentValues[binding.toString()] ?? []
  }

  get (index = 0) {
    return this._getValues(this.defaultBinding)[index]
  }

  get hasTranslations () {
    return !!this._getValues(this.defaultBinding)[0]?.['@language']
  }

  get anotherTranslationIsPossible () {
    const usedLanguagesCount = this._getValues(this.defaultBinding).map(value => value?.['@language']).length
    const i10nLanguagesCount = Object.keys(Language.i10nLanguages).length
    return this.hasTranslations && usedLanguagesCount < i10nLanguagesCount
  }

  get length () {
    return this._getValues(this.defaultBinding).length
  }

  getAll () {
    return this._getValues(this.defaultBinding)
  }

  addTranslation () {
    let usedLanguages = this._getValues(this.defaultBinding).map(value => value['@language'])
    let unusedLanguages = Object.keys(Language.i10nLanguages).filter(language => !usedLanguages.includes(language))

    if (unusedLanguages.length) {
      const values = this._getValues(this.defaultBinding)
      values.push({ '@value': '', '@language': unusedLanguages.shift() })
    }
  }

  addItem () {
    const values = this._getValues(this.defaultBinding)

    const createItem = (value) => {
      const newItem = Object.assign({}, value)
      if (newItem['@id']) newItem['@id'] = ''
      if (newItem['@value']) newItem['@value'] = ''
      return newItem
    }

    // Needed for group field.
    if (Array.isArray(values)) {
      const newItem = {}
      for (const [binding, value] of Object.entries(values[0])) {
        newItem[binding] = createItem(value[0])
      }
      values.push(newItem)
    }

    else if (typeof values[0] === 'object') {
      values.push(createItem(values[0]))
    }
  }

  removeItem (index) {
    const values = this._getValues(this.defaultBinding)
    values.splice(index, 1)
  }

  enableTranslations () {
    const values = this._getValues(this.defaultBinding) ?? []
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
  }

  removeTranslations () {
    let values = this._getValues(this.defaultBinding)
    if (values?.[0]?.['@language']) {
      values = [values?.[0]?.['@value']]
    }
  }

  set (value, index) {
    const values = this._getValues(this.defaultBinding)
    values[index] = value
  }

  /**
   * TODO Maybe problematic.. maybe split up into setId and setValue
   * @param value
   * @param index
   */
  setValue (value, index) {
    const values = this._getValues(this.defaultBinding)
    if (!value) return

    if (typeof values[index]?.['@value'] !== 'undefined') {
      values[index]['@value'] = value
    }
    else if (typeof values[index]?.['@id'] !== 'undefined') {
      values[index]['@id'] = value
    }
    else {
      values[index] = value
    }
  }

}
