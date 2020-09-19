import {FieldSuggestion, FormElementData, FormElementResolver, PredicateMeta, Quad} from '../Types'

const typeMapping = {
  'http://www.w3.org/2001/XMLSchema#string': { importance: 1, type: 'text' },
  'http://www.w3.org/2000/01/rdf-schema#Class': { importance: 1, type: 'type' }
}

export class DataTypes implements FormElementResolver {

  resolve(quad: Quad, formElementData: FormElementData): FieldSuggestion | void {
    const predicateMeta = formElementData.predicateMeta

    if (formElementData?.subject) {
      return { importance: 0, type: 'subject' }
    }

    if (predicateMeta.range?.default) {
      if (typeMapping[predicateMeta.range.default]) {
        return typeMapping[predicateMeta.range.default]
      }
    }

    return { importance: 0, type: 'text' }
  }
}