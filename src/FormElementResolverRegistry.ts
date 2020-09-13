import { FormElementResolver, Quad, Newable, FieldSuggestion, FormElementData } from './Types'

class FormElementResolverRegistryClass {

  readonly resolvers: Array<FormElementResolver> = []

  register (formElementResolver: Newable<FormElementResolver>) {
    this.resolvers.push(new formElementResolver())
  }

  resolve (quad: Quad, formElementData: FormElementData) {
    const suggestions: Array<FieldSuggestion> = []
    for (const resolver of this.resolvers) {
      const suggestion = resolver.resolve(quad, formElementData)
      if (suggestion) suggestions.push(suggestion)
    }

    if (suggestions.length) {
      suggestions.sort((a, b) => b.importance - a.importance)
      return suggestions[0].type
    }
  }

}

export const FormElementResolverRegistry = new FormElementResolverRegistryClass()
