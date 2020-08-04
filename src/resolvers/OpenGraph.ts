import { FieldResolver, FieldResolverInterface } from '../FieldResolver'
import { FieldTypes } from '../FieldTypes'

export class OpenGraph implements FieldResolverInterface {
  addDefinitions (fieldResolver: FieldResolver) {
    fieldResolver.set('predicate', 'http://ogp.me/ns#image', FieldTypes.urlImage)
    fieldResolver.set('predicate', 'http://ogp.me/ns#description', FieldTypes.text)
  }
}
