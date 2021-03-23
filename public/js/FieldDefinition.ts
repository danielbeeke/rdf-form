import { FieldDefinition } from './Types'
import { Language } from "./LanguageService";
import { lastPart } from './Helpers';

const fields = {
  name: 'name',
  fieldWidget: 'string',
  binding: 'stringArray',
  innerBinding: 'stringArray',
  
  required: 'boolean',
  multiple: 'boolean',
  disabled: 'boolean',
  translatable: 'boolean',
  
  order: 'number',
  rows: 'number',
  
  label: 'l10nString',
  description: 'l10nString',
  emptyText: 'l10nString',
  placeholder: 'l10nString',

  autoCompleteSource: 'string',
  autoCompleteQuery: 'string',
  optionsSource: 'string',
  optionsQuery: 'string',
  container: 'string',
  
  option: 'options',
  range: 'string',
  fieldGroup: 'string',
  prefix: 'string',
  jsonLdKey: 'string',
  saveEmptyValue: 'boolean',
  dimensions: 'stringArray',
  innerType: 'string',
  focalPoint: 'stringArray'
}

/**
 * The field definitions are in RDF format.
 * This class makes it possible to use it as a simple object.
 *
 * Example:
 * formElement.Field.required
 * formElement.Field.binding
 *
 * @param definition
 * @param formPrefix
 * @constructor
 */
export function FieldDefinition(definition: any, formPrefix: string): FieldDefinition {
  const convertedDefinition = {
    'name': lastPart(definition['@id'])
  }

  for (const [predicate, type] of Object.entries(fields)) {
    if (definition[formPrefix + predicate]) {
      const firstItem = definition[formPrefix + predicate]?.[0]

      switch (type) {
        case 'string':
          convertedDefinition[predicate] = firstItem?.['@value'] ?? firstItem?.['@id']
          break;
          
        case 'options':
          Object.defineProperty(convertedDefinition, predicate, { get: () => {
            return definition[formPrefix + predicate].map(option => {
              return {
                value: option[formPrefix + 'label']?.[0]?.['@id'] ?? option[formPrefix + 'label']?.[0]?.['@value'],
                label: Language.multilingualValue(option[formPrefix + 'label'])
              }
            }) 
          }})
          break;

        case 'stringArray':
          convertedDefinition[predicate] = definition[formPrefix + predicate].map(item => item?.['@value'] ?? item?.['@id'])
          break;

        case 'l10nString':
          Object.defineProperty(convertedDefinition, predicate, { get: () => Language.multilingualValue(definition[formPrefix + predicate])})
          break;

        case 'boolean':
          convertedDefinition[predicate] = definition[formPrefix + predicate]?.[0]?.['@value'] === true
          break;
      }
    }
  }

  return <FieldDefinition> convertedDefinition
}
