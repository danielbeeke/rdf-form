import { FieldDefinitionOptions, FieldDefinitionProxy } from './Types'
import { Language } from "./LanguageService";
import { lastPart } from "./Helpers";

const booleanFields = [
  'multiple',
  'disabled',
  'translatable',
  'saveMeta',
  'focalPoint',
]

/**
 * A proxy class that sits between the formElement and the field definition.
 * The field definitions are in RDF format.
 * This class makes it possible to use it as a simple object.
 * TODO Maybe this would be much better if it was a simple class that has everything in a declaritive manner instead of all these proxy stuff.
 *
 * Example:
 * formElement.Field.required
 * formElement.Field.binding
 *
 * @param definition
 * @param formPrefix
 * @constructor
 */
export function FieldDefinition(definition: any, formPrefix: string) : FieldDefinitionProxy {
  return new Proxy(definition, {
    get: function(definition: FieldDefinitionProxy, prop: keyof FieldDefinitionOptions, receiver: any) {
      const value = definition[formPrefix + prop]
      if (prop === 'prefix') return formPrefix
      if (prop === 'name') return lastPart(definition['@id'])
      if (prop === 'option') return value

      return value?.[0]?.['@language'] ? Language.multilingualValue(value) : value?.[0]?.['@value'] ?? value?.[0]?.['@id'] ?? (booleanFields.includes(prop) ? false : '')
    },
    getOwnPropertyDescriptor: function(target, key) {
      return { value: this.get(target, key), enumerable: true, configurable: true };
    }
  });
}
