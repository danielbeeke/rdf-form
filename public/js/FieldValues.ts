import { Language } from './LanguageService'
import { FieldDefinitionProxy } from './Types'

/**
 * This class sits between a field and the RDF JSON ld values.
 * All mutations to the data happen here.
 */
export class FieldValues {

  public jsonLdValueType = 'value'
  public bindingValues = new Map<string, any>()
  public bindings: Array<any>
  public additionalBindings: Array<any>
  readonly defaultBinding: string
  readonly hasSubValues: boolean
  readonly innerBinding: string
  public Field: FieldDefinitionProxy

  /**
   *
   * @param parentValues
   * @param binding
   */
  constructor (field, values) {
    this.Field = field
    this.bindings = Array.isArray(this.Field.binding) ? this.Field.binding : [this.Field.binding]
    this.defaultBinding = this.bindings[0]

    Language.addEventListener('language.removed', (event: CustomEvent) => {
      const removedLanguage = event.detail

      if (this.hasTranslations) {
        for (const binding of this.bindings) {
          let values = this.getAllFromBinding(binding)
          const index = values.find(value => value?.['@language'] === removedLanguage)
          if (index !== null) values.splice(index, 1)
        }  
      }
    })

    console.log(this.Field)

    for (const binding of this.bindings) {
      const list = values?.[0]?.['@list']
      const thisBindingValues = []
      if (list) {
        for (const item of list) {
          // console.log(item)
          thisBindingValues.push(item[binding])
        }
        this.bindingValues.set(binding.toString(), thisBindingValues)
      }
      else {
        this.bindingValues.set(binding.toString(), values)
      }
    }
  }

  _getValues (binding) {
    let values = this.bindingValues.get(binding.toString())

    if (!values) {
      values = []
      this.bindingValues.set(binding.toString(), values)
    }

    return values
  }

  get (index = 0, binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)
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

  getAllFromBinding (binding = null) {
    return this._getValues(binding ?? this.defaultBinding)
  }

  getAll () {
    const allValues = {};
    [...this.bindingValues.keys()].forEach(binding => {
      allValues[binding] = this.getAllFromBinding(binding)
    })

    return allValues
  }

  addItem (binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)

    const createItem = () => {
      const newItem = {}
      newItem['@' + this.jsonLdValueType] = ''
      if (this.hasTranslations) newItem['@language'] = Language.currentL10nLanguage
      return newItem
    }

    values.push(createItem())
  }

  removeItem (index, binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)
    values.splice(index, 1)
  }

  // TODO support multi binding
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

  // TODO support multi binding
  removeTranslations () {
    let values = this._getValues(this.defaultBinding)
    delete values?.[0]?.['@language']
    values.splice(1)
  }

  set (value, index, binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)
    values[index] = value
  }

  get groupedValues () {
    const values = []
    for (const binding of this.bindings) {
      const bindingValues = this.getAllFromBinding(binding)

      for (const [index, value] of bindingValues.entries()) {
        if (!values[index]) values[index] = {}
        values[index][binding] = value
      }
    }

    return values
  }

  async serialize (jsonLd) {
    const values = this.getAllFromBinding()
    jsonLd[this.defaultBinding] = values.length ? values : null
  }

}
