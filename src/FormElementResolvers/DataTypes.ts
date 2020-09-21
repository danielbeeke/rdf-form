import {FieldSuggestion, FormElementData, FormElementResolver, PredicateMeta, Quad} from '../Types'

const typeMapping = {
  'http://www.w3.org/2001/XMLSchema#string': { importance: 1, type: 'text' },
  'http://www.w3.org/2000/01/rdf-schema#Class': { importance: 1, type: 'type' },
  'http://www.w3.org/2006/vcard/ns#email': { importance: 1, type: 'email' },
  'http://www.w3.org/2006/vcard/ns#country-name': { importance: 1, type: 'country' }
}

export class DataTypes implements FormElementResolver {

  resolve(quad: Quad, formElementData: FormElementData): FieldSuggestion | void {
    const predicateMeta = formElementData.predicateMeta

    if (formElementData?.subject) {
      return { importance: 0, type: 'subject' }
    }

    const predicate = quad.predicate?.id ?? quad.predicate?.value

    if (predicate) {
      if (typeMapping[predicate]) {
        return typeMapping[predicate]
      }
    }

    if (predicateMeta.range?.default) {
      if (typeMapping[predicateMeta.range.default]) {
        return typeMapping[predicateMeta.range.default]
      }
    }

    return { importance: 0, type: 'text' }
  }
}
