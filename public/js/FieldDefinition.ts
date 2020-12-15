import { FieldDefinitionOptions, FieldDefinitionProxy } from './Types'
import { Language } from "./LanguageService";
import { lastPart } from "./Helpers";

export class StringProxy extends String {
  private _values: Array<any> = []

  constructor(firstValue, values) {
    super(firstValue);
    this._values = values
  }

  values () {
    return this._values
  }

  *[Symbol.iterator] (): IterableIterator<string> {
    if (this._values) {
      for (const value of this._values) {
        yield value
      }
    }
  }
}

const booleanFields = [
  'multiple',
  'disabled',
  'translatable'
]

export function FieldDefinition(definition: any, formPrefix: string) : FieldDefinitionProxy {
  return new Proxy(definition, {
    get: function(definition: FieldDefinitionProxy, prop: keyof FieldDefinitionOptions, receiver: any) {

      if (prop === 'prefix') {
        return formPrefix
      }

      if (prop === 'name') {
        return lastPart(definition['@id'])
      }

      const value = definition[formPrefix + prop]

      const firstValue = value?.[0]?.['@language'] ? Language.multilingualValue(value) : value?.[0]?.['@value'] ?? value?.[0]?.['@id'] ?? (booleanFields.includes(prop) ? false : '')
      return typeof firstValue === 'string' ? new StringProxy(firstValue, value) : firstValue
    },
    getOwnPropertyDescriptor: function(target, key) {
      return { value: this.get(target, key), enumerable: true, configurable: true };
    }
  });
}
