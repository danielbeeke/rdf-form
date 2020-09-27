import { RdfForm } from './RdfForm'
import { FormElementResolver, Newable, FieldSuggestion } from './Types'

/**
 * A registry for FormElement resolvers.
 * A FormElement resolver is given a predicate and predicate meta and
 * possibly returns suggestions what form element would be best.
 */
export class FormElementResolverRegistry {

  readonly resolvers: Array<FormElementResolver> = []
  private form: RdfForm

  constructor(rdfForm: RdfForm) {
    this.form = rdfForm
  }

  register (formElementResolver: Newable<FormElementResolver>) {
    this.resolvers.push(new formElementResolver())
  }

  resolve (predicateUri, predicateMeta, uiSettings) {
    const suggestions: Array<FieldSuggestion> = []
    for (const resolver of this.resolvers) {
      const suggestion = resolver.resolve(predicateUri, predicateMeta, uiSettings)
      if (suggestion) suggestions.push(suggestion)
    }

    if (suggestions.length) {
      suggestions.sort((a, b) => b.importance - a.importance)
      return suggestions[0].type
    }
  }

}
