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

  public jsonLdValueType = 'value'
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
    let values = this.bindingValues.get(binding.toString())
    return values[binding.toString()] ?? []
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
    const l10nLanguagesCount = Object.keys(Language.l10nLanguages).length
    const filteredArray = usedLanguages.filter(value => Object.keys(Language.l10nLanguages).includes(value));
    const usedLanguagesCount = filteredArray.length
    return this.hasTranslations && (usedLanguagesCount < l10nLanguagesCount || this._getValues(this.defaultBinding).length > l10nLanguagesCount)
  }

  get length () {
    return this._getValues(this.defaultBinding).length
  }

  getAll () {
    return this._getValues(this.defaultBinding)
  }

  addItem () {
    const values = this._getValues(this.defaultBinding)

    const createItem = () => {
      const newItem = {}
      newItem['@' + this.jsonLdValueType] = ''
      if (this.hasTranslations) newItem['@language'] = ''
      return newItem
    }

    values.push(createItem())
  }

  removeItem (index) {
    const values = this._getValues(this.defaultBinding)
    values.splice(index, 1)
  }

  enableTranslations () {
    const values = this._getValues(this.defaultBinding) ?? []

    let usedLanguages = this._getValues(this.defaultBinding).map(value => value['@language'])
    let unusedLanguages = Object.keys(Language.l10nLanguages).filter(language => !usedLanguages.includes(language))

    for (const [index, unusedLanguage] of unusedLanguages.entries()) {
      let value = values[index]
      if (typeof value === 'object') {
        values[index]['@language'] = unusedLanguage
      }
      else {
        values[index] = {
          '@value': this.bindingValues?.[index] ?? '',
          '@language': unusedLanguage
        }
      }
    }

    if (values.length > unusedLanguages.length) {
      for (let index = unusedLanguages.length; index <= values.length; index++) {
        let value = values[index]
        if (typeof value === 'object') {
          values[index]['@language'] = Language.current
        }
        else {
          values[index] = {
            '@value':  this.bindingValues?.[index] ?? '',
            '@language': Language.current
          }
        }
      }
    }
  }

  removeTranslations () {
    let values = this._getValues(this.defaultBinding)
    delete values?.[0]?.['@language']
    values.splice(1)
  }

  set (value, index) {
    const values = this._getValues(this.defaultBinding)
    values[index] = value
  }

}
