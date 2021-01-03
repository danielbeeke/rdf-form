import { FieldDefinitionOptions, FieldDefinitionProxy } from './Types'
import { Language } from "./LanguageService";
import { lastPart } from "./Helpers";

const booleanFields = [
  'multiple',
  'disabled',
  'translatable'
]

export function FieldDefinition(definition: any, formPrefix: string) : FieldDefinitionProxy {
  return new Proxy(definition, {
    get: function(definition: FieldDefinitionProxy, prop: keyof FieldDefinitionOptions, receiver: any) {
      const value = definition[formPrefix + prop]

      if (prop === 'prefix') {
        return formPrefix
      }

      if (prop === 'name') {
        return lastPart(definition['@id'])
      }

      if (prop === 'option') {
        return value
      }

      return value?.[0]?.['@language'] ? Language.multilingualValue(value) : value?.[0]?.['@value'] ?? value?.[0]?.['@id'] ?? (booleanFields.includes(prop) ? false : '')
    },
    getOwnPropertyDescriptor: function(target, key) {
      return { value: this.get(target, key), enumerable: true, configurable: true };
    }
  });
}
