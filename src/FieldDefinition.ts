import { FieldDefinitionOptions, FieldDefinitionProxy } from './Types'
import { Language } from "./LanguageService";

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
    for (const value of this._values) {
      yield value
    }
  }
}

export function FieldDefinition(definition: any, formPrefix: string) : FieldDefinitionProxy {
  return new Proxy(definition, {
    get: function(definition: FieldDefinitionProxy, prop: keyof FieldDefinitionOptions, receiver: any) {
      const value = definition[formPrefix + prop]
      const firstValue = value?.[0]?.['@language'] ? Language.multilingualValue(value) : value?.[0]?.['@value'] ?? value?.[0]?.['@id'] ?? ''
      return new StringProxy(firstValue, value)
    },
    getOwnPropertyDescriptor: function(target, key) {
      return { value: this.get(target, key), enumerable: true, configurable: true };
    }
  });
}
