import { Language } from './LanguageService'

/**
 * This class sits between a field and the RDF JSON ld values.
 * All mutations to the data happen here.
 *
 * TODO the flatMap construction makes it harder to update values.
 * All the methods that mutate things should be checked
 */
export class FieldValues {

  public jsonLdValueType = 'value'
  public bindingValues = new Map<string, any>()
  public bindings: Array<any>
  public additionalBindings: Array<any>
  readonly defaultBinding: string
  readonly hasSubValues: boolean
  readonly wrapperBinding: string

  /**
   *
   * @param parentValues
   * @param binding
   */
  constructor (parentValues, binding, wrapperBinding = null, additionalBindings = []) {
    this.bindings = binding
    this.wrapperBinding = wrapperBinding
    this.defaultBinding = this.bindings[0]
    this.additionalBindings = additionalBindings

    Language.addEventListener('language.removed', (event: CustomEvent) => {
      const removedLanguage = event.detail

      if (this.hasTranslations) {
        for (const binding of this.bindings) {
          let values = this.getAllFromOneBinding(binding)
          const index = values.find(value => value?.['@language'] === removedLanguage)
          if (index !== null) values.splice(index, 1)
        }  
      }
    })

    if (wrapperBinding && parentValues[wrapperBinding]) {
      const bindingsValues = {}

      const bindings = [binding, ...additionalBindings]

      for (const innerBinding of bindings) {
        for (const [index, item] of parentValues[wrapperBinding].entries()) {
          if (item[innerBinding]) {
            if (!bindingsValues[innerBinding]) bindingsValues[innerBinding] = []
            bindingsValues[innerBinding].push(...item[innerBinding])
          }
        }  
      }

      for (const [binding, values] of Object.entries(bindingsValues)) {
        this.bindingValues.set(binding, bindingsValues)
      }
    }
    else {
      for (const binding of this.bindings) {
        this.bindingValues.set(binding.toString(), parentValues)
      }
    }
  }

  _getValues (binding) {
    let values = this.bindingValues.get(binding.toString()) ?? {}

    if (!values[binding.toString()]) {
      const newValues = []
      values[binding.toString()] = newValues
      this.bindingValues.set(binding.toString(), values)
    }

    return values[binding.toString()] ?? []
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

  getAllFromOneBinding (binding = null) {
    return this._getValues(binding ?? this.defaultBinding)
  }

  getAll () {
    const allValues = {};
    [...this.bindingValues.keys()].forEach(binding => {
      allValues[binding] = this.getAllFromOneBinding(binding)
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

  // TODO make multi binding
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

  // TODO make multi binding
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
      const bindingValues = this.getAllFromOneBinding(binding)

      for (const [index, value] of bindingValues.entries()) {
        if (!values[index]) values[index] = {}
        values[index][binding] = value
      }
    }

    return values
  }

}
