import { FieldResolver, FieldResolverInterface } from '../FieldResolver'
import { FieldTypes } from '../FieldTypes'

export class W3 implements FieldResolverInterface {
  addDefinitions (fieldResolver: FieldResolver) {
    fieldResolver.set('predicate', 'http://www.w3.org/1999/xhtml/vocab#license', FieldTypes.license)
  }
}
