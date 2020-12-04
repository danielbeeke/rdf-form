import { Language } from './LanguageService'
import { asArray } from './Helpers'

/**
 * This class sits between a field and the RDF JSON ld values.
 * All mutations to the data happen here.
 *
 * TODO the flatMap construction makes it harder to update values.
 * All the methods that mutate things should be checked
 */
export class FieldValues {

  private bindingValues = new Map<string, any>()
  readonly bindings: Array<any>
  readonly defaultBinding: string

  /**
   *
   * @param parentValues
   * @param binding
   */
  constructor (parentValues, binding) {
    this.bindings = asArray(binding)
    this.defaultBinding = this.bindings[0]

    for (const binding of this.bindings) {
      this.bindingValues.set(binding.toString(), parentValues)
    }
  }

  _getValues (binding) {
    let parentValues = this.bindingValues.get(binding.toString())
    return Array.isArray(parentValues) ? parentValues.flatMap(groupItem => groupItem[binding]) : parentValues[binding.toString()] ?? []
  }

  get (index = 0) {
    const values = this._getValues(this.defaultBinding)
    return values[index]
  }

  get hasTranslations () {
    return !!this._getValues(this.defaultBinding).some(item => item?.['@language'])
  }

  get anotherTranslationIsPossible () {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    const usedLanguages = this._getValues(this.defaultBinding).map(value => value?.['@language']).filter(onlyUnique)
    const i10nLanguagesCount = Object.keys(Language.i10nLanguages).length
    const filteredArray = usedLanguages.filter(value => Object.keys(Language.i10nLanguages).includes(value));
    const usedLanguagesCount = filteredArray.length
    return this.hasTranslations && (usedLanguagesCount < i10nLanguagesCount || this._getValues(this.defaultBinding).length > i10nLanguagesCount)
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
    const values = this._getValues(this.defaultBinding)

    if (unusedLanguages.length) {
      values.push({ '@value': '', '@language': unusedLanguages.shift() })
    }
    else {
      values.push({ '@value': '', '@language': usedLanguages[0] })
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
    const parentValues = this.bindingValues.get(this.defaultBinding)
    const values = this._getValues(this.defaultBinding)
    if (Array.isArray(parentValues)) {
      parentValues[index][this.defaultBinding] = value
    }
    else {
      values[index] = value
    }
  }

}
