import { FieldResolver, FieldResolverInterface } from '../FieldResolver'
import { FieldTypes } from '../FieldTypes'

export class SchemaOrg implements FieldResolverInterface {
  addDefinitions (fieldResolver: FieldResolver) {
    fieldResolver.set('predicate', 'http://schema.org/headline', FieldTypes.string)
    fieldResolver.set('predicate', 'http://schema.org/datePublished', FieldTypes.date)
    fieldResolver.set('predicate', 'http://schema.org/keywords', FieldTypes.tags)
  }
}
