import { Language } from './LanguageService'
import { FieldDefinition } from './Types'
import { expand, lastPart } from './Helpers'

/**
 * This class sits between a field and the RDF JSON ld values.
 * All mutations to the data happen here.
 */
export class FieldValues {

  public jsonLdValueType = 'value'
  public bindingValues = new Map<string, any>()
  public bindings: Array<any> = []
  public additionalBindings: Array<any>
  readonly defaultBinding: string
  readonly hasSubValues: boolean
  readonly innerBinding: string
  public Field: FieldDefinition
  private formOntology: {}

  /**
   *
   * @param parentValues
   * @param binding
   */
  constructor (field, parentValues, formOntology) {
    this.Field = field
    this.formOntology = formOntology
    
    for (const [fieldProperty, propertySetting] of Object.entries(this.Field)) {
      const fieldMetaProperties = this.formOntology['@graph'].find(predicate => predicate?.['@id'] === 'form:' + fieldProperty)
      if (fieldMetaProperties['form:isBindingProperty'] && Array.isArray(propertySetting)) {
        this.bindings.push(...propertySetting)
      }
    }

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

    // Grouped values inside a binding
    if (this.Field.innerBinding) {
      this.bindings = this.bindings.filter(binding => !this.Field.binding.includes(binding))
    }

    const outerBindings = this.Field.innerBinding ? this.Field.binding : false
    let newParentValues = []

    if (outerBindings) {
      this.defaultBinding = this.Field.innerBinding[0]
      for (const outerBinding of outerBindings) {
        newParentValues.push(...parentValues[outerBinding])
      }  
    }
    else {
      newParentValues = parentValues
    }

    for (const binding of this.bindings) {
      const list = newParentValues?.[0]?.['@list']

      const thisBindingValues = []
      if (list) {
        for (const item of list) {
          if (item[binding]) thisBindingValues.push(...item[binding])
        }

        this.bindingValues.set(lastPart(binding), thisBindingValues)
      }
      else {
        this.bindingValues.set(lastPart(binding), newParentValues[binding])
      }
    }
  }

  _getValues (binding) {
    binding = lastPart(binding)
    let values = this.bindingValues.get(binding)

    if (!values) {
      values = []
      this.bindingValues.set(binding, values)
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

  async serialize (jsonLd) {
    let value: any = []
    let pointer = value
    if (this.Field.innerBinding) {
      value = { [this.defaultBinding]: [] }
      pointer = value[this.defaultBinding]
    }

    for (const binding of this.bindings) {
      const values = this.getAllFromBinding(binding)
      for (const [index, value] of values.entries()) {
        console.log(index, value)
      }
    }
    // jsonLd[this.defaultBinding] = values.length ? values : null
  }

}
