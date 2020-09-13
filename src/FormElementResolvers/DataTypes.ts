import {FieldSuggestion, FormElementResolver, PredicateMeta, Quad} from '../Types'

const typeMapping = {
  'http://www.w3.org/2001/XMLSchema#string': { importance: 1, type: 'text' }
}

export class DataTypes implements FormElementResolver {

  resolve(quad: Quad, predicateMeta: PredicateMeta): FieldSuggestion | void {
    if (predicateMeta.range?.default) {
      if (typeMapping[predicateMeta.range.default]) {
        return typeMapping[predicateMeta.range.default]
      }
    }

    return { importance: 0, type: 'text' }
  }
}
