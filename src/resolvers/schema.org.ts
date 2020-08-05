import { Quad } from '../Quad.js'
import { BaseFieldResolver } from './BaseFieldResolver'
import { FieldResolver } from '../FieldResolver'
import { FieldTypes } from '../FieldTypes'

export class SchemaOrg extends BaseFieldResolver {
  addDefinitions (fieldResolver: FieldResolver) {
    fieldResolver.set('predicate', 'http://schema.org/headline', FieldTypes.string, this)
    fieldResolver.set('predicate', 'http://schema.org/datePublished', FieldTypes.date, this)
    fieldResolver.set('predicate', 'http://schema.org/keywords', FieldTypes.tags, this)
  }
}
