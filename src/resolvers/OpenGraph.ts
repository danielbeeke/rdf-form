import { Quad } from '../Quad'
import { BaseFieldResolver } from './BaseFieldResolver'
import { FieldResolver } from '../FieldResolver'
import { FieldTypes } from '../FieldTypes'

export class OpenGraph extends BaseFieldResolver {
  addDefinitions (fieldResolver: FieldResolver) {
    fieldResolver.set('predicate', 'http://ogp.me/ns#image', FieldTypes.urlImage, this)
    fieldResolver.set('predicate', 'http://ogp.me/ns#description', FieldTypes.text, this)
  }

  getLabel (quad: Quad): Promise<string | undefined> {
    const source = 'https://raw.githubusercontent.com/facebookarchive/open-graph-protocol/master/ns/ogp.me.ttl'
    const query = `
        prefix og: <http://ogp.me/ns#>
        CONSTRUCT WHERE { og:${quad.predicate.value.split('#')[1]} rdfs:comment ?o }
    `
    return this.getLabelFetcher(source, query)
  }
}
