import { Language } from './LanguageService'
import { FieldDefinition } from './Types'
import {lastPart} from "./helpers/lastPart";


export const groupItemProxy = (rootTarget, rootProp, groupItemIndexGetter) => {
  return new Proxy(rootTarget, {
    get: function (target, prop, receiver) {
      console.log(groupItemIndexGetter())
      if (![Symbol.iterator, 'length', 'some', 'entries'].includes(prop)) {
        // TODO it is not yet possible to have fields with multiple items inside a group.
        return target?.[prop]?.[rootProp]?.[0]
      }

      return Reflect.get(target, prop, receiver);
    }
  })
}

export const groupProxy = (data, jsonLdValueType, groupItemIndexGetter) => {
  return new Proxy(data, {
    get: function (target, prop, receiver) {
      if (target?.[0]?.[prop]) return { [prop]: groupItemProxy(target, prop, groupItemIndexGetter) }
      if (prop === 'splice') return (start, deleteCount) => target.splice(start, deleteCount)
      return Reflect.get(target, prop, receiver);
    }
  })
}

export const listProxy = (data, aliasses, binding) => {
  return new Proxy(data, {
    get: function (target, prop, receiver) {
      if (![Symbol.iterator, 'length', 'some', 'entries'].includes(prop)) {
        return listItemProxy(target[prop], aliasses, binding)
      }

      return Reflect.get(target, prop, receiver);
    }
  })
}

export const listItemProxy = (rootTarget, aliases, binding) => {
  if (!rootTarget) return
  return new Proxy(rootTarget, {
    get: function (target, prop, receiver) {
      if (['@value', '@type', '@id', '@language'].includes(prop.toString())) {
        return target[aliases[binding]]?.[0][prop]
      }

      // TODO can this be removed?
      if (![Symbol.iterator, 'length', 'some', 'entries'].includes(prop)) {
        if (aliases[prop]) {
          return target[aliases[prop]]
        }
      }

      return Reflect.get(target, prop, receiver);
    },
    set: function (target, prop, value) {
      if (['@value', '@type', '@id', '@language'].includes(prop.toString())) {
        target[aliases[binding]][0][prop] = value
        return true
      }

      return Reflect.set(target, prop, value);
    }
  })
}

export const wrapWithProxy = (data, bindings, isGroup, isList, outerBinding, jsonLdValueType, groupItemIndexGetter) => {
  const aliasses = {}

  for (const binding of bindings) {
    aliasses[lastPart(binding)] = binding
  }

  if (outerBinding) aliasses[lastPart(outerBinding)] = outerBinding

  return new Proxy(data, {
    get: function (target, prop, receiver) {
      if (prop in aliasses) {
        const predicate = outerBinding ? outerBinding : aliasses[prop]

        if (isGroup) {
          return groupProxy(target[predicate]?.[0]?.['@list'], jsonLdValueType, groupItemIndexGetter)
        }
        else 
        if (isList || isGroup) {
          const listBinding = outerBinding && prop === lastPart(outerBinding) ? lastPart(bindings[0]) : prop
          return listProxy(target[predicate]?.[0]?.['@list'], aliasses, listBinding)
        }
        else {
          if (!target[predicate]) {
            target[predicate] = []
          }
          return target[predicate]
        }
      }

      return target[prop]
    }
  })
} 

export function JsonLdProxy (jsonLd) {
  if (typeof jsonLd !== 'object') return jsonLd

  return new Proxy(jsonLd, {
    get(target, prop, receiver) {
      const isOurProperty = !Reflect.has({}, prop) && !Reflect.has([], prop)
      if (Reflect.has(target, prop) && isOurProperty) {
        return JsonLdProxy(target[prop])
      }

      if (target?.['@list'] && isOurProperty) {
        return JsonLdProxy(target['@list'])
      }

      return Reflect.get(target, prop, receiver)
    }
  });
}


/**
 * This class sits between a field and the RDF JSON ld values.
 * All mutations to the data happen here.
 */
export class FieldValues {

  public jsonLdValueType = 'value'
  public bindingValues = new Map<string, any>()
  public bindings: Array<any> = []
  public additionalBindings: Array<any>
  public defaultBinding: string
  private innerBinding: string
  public Field: FieldDefinition
  private formOntology: {}
  private isList: boolean = false
  public isGroup: boolean = false
  public parentValues
  private groupItemIndex = null

  /**
   *
   * @param parentValues
   * @param binding
   */
  constructor (field, parentValues, formOntology) {
    this.Field = field
    this.formOntology = formOntology

    // Goes through all the fields properties, check which items have bindings.
    for (const [fieldProperty, propertySetting] of Object.entries(this.Field)) {
      const fieldMetaProperties = this.formOntology['@graph'].find(predicate => predicate?.['@id'] === 'form:' + fieldProperty)
      if (fieldMetaProperties && fieldMetaProperties['form:isBindingProperty'] && Array.isArray(propertySetting)) {
        this.bindings.push(...propertySetting)
      }
    }

    this.defaultBinding = this.Field.innerBinding ? this.Field.innerBinding[0] : this.bindings[0]
    if (this.bindings.length > 1 || this.innerBinding) this.isList = true
    if (this.Field.fieldWidget === 'group') this.isGroup = true
    
    // Grouped values inside a binding
    if (this.Field.innerBinding) this.bindings = this.bindings.filter(binding => !this.Field.binding.includes(binding))
    if (!parentValues) {
      parentValues = {}
    }
    this.parentValues = wrapWithProxy(parentValues, this.bindings, this.isGroup, this.isList, this.Field.innerBinding ? this.Field.binding[0] : null, this.jsonLdValueType, () => this.groupItemIndex)
    this.parentValues = JsonLdProxy(parentValues)

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
  }

  _getValues (binding) {
    if (!binding) binding = this.defaultBinding
    binding = lastPart(binding)
    return this.parentValues?.[binding] ?? []
  }

  get (index = 0, binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)
    return values[index]
  }

  getValue (index = 0, binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)
    return values?.[index]?.['@' + this.jsonLdValueType] ?? null
  }

  set (newValue, index, binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)
    values[index] = newValue
  }

  setValue (newValue, index, binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)

    if (!values[index]) {
      values[index] = {}
    }

    values[index]['@' + this.jsonLdValueType] = newValue
    if (this.hasTranslations) values[index]['@language'] = Language.currentL10nLanguage
  }

  setGroupItemIndex (index) {
    this.groupItemIndex = index
  }

  get hasTranslations () {
    if (this.Field.translatable === 'always') return true
    const values = this._getValues(this.defaultBinding)
    const hasTranslations = values && !!values.some(item => item?.['@language'])
    return hasTranslations
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
    return this._getValues(binding ?? this.defaultBinding) ?? []
  }

  addItem (binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)
    
    const createItem = () => {
      if (this.isGroup) {
        const newItem = JSON.parse(JSON.stringify(values[0]))
        for (const [predicate, value] of Object.entries(newItem)) {
          if (value?.[0]?.['@value']) value[0]['@value'] = ''
          if (value?.[0]?.['@id']) value[0]['@id'] = ''
        }
        return newItem
      }
      else {
        const newItem = {}
        newItem['@' + this.jsonLdValueType] = ''
        if (this.hasTranslations) newItem['@language'] = Language.currentL10nLanguage  
        return newItem
      }
    }
    
    values.push(createItem())
  }

  removeItem (index, binding = null) {
    const values = this._getValues(binding ?? this.defaultBinding)
    values.splice(index, 1)
  }

  enableTranslations () {
    for (const binding of this.bindings) {
      const values = this._getValues(binding) ?? []

      let usedLanguages = values.map(value => value['@language'])
      let unusedLanguages = Object.keys(Language.l10nLanguages).filter(language => !usedLanguages.includes(language))
  
      for (const [index, unusedLanguage] of unusedLanguages.entries()) {
        let value = values[index]
        if (typeof value === 'object') {
          values[index]['@language'] = unusedLanguage
        }
        else {
          values[index] = {
            '@value': '',
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
              '@value':  '',
              '@language': Language.current
            }
          }
        }
      }
    }
  }

  removeTranslations () {
    for (const binding of this.bindings) {
      let values = this._getValues(binding)
      delete values?.[0]?.['@language']
      values.splice(1)  
    }
  }

  getForChildElement (childField: FieldDefinition) {
    const childBinding = childField.binding[0] // TODO needs improvement? What if innerBinding?

    if (!this.parentValues[lastPart(this.defaultBinding)]) {
      this.parentValues[lastPart(this.defaultBinding)] = {}
    }

    if (!this.parentValues[lastPart(this.defaultBinding)]?.[childBinding]) {
      this.parentValues[lastPart(this.defaultBinding)][childBinding] = []
    }
    
    const values = this.parentValues[lastPart(this.defaultBinding)][childBinding]
    return values ?? []
  }
}
