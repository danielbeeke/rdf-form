import { FieldDefinitionOptions } from './Types'
import { Language } from './LanguageService'

export interface FieldDefinition extends FieldDefinitionOptions {}

export function FieldDefinition(definition: FieldDefinitionOptions ) : FieldDefinition {
  return new Proxy(definition, {
    get: function(definition: FieldDefinitionOptions, prop: keyof FieldDefinition) {
      return Language.multilingualValue(definition[prop]);
    }
  });
}
