import {FieldSuggestion, FormElementData, FormElementResolver, PredicateMeta, Quad} from '../Types'

const typeMapping = {
  'http://www.w3.org/2001/XMLSchema#string': { importance: 1, type: 'text' },
  'http://www.w3.org/2000/01/rdf-schema#Class': { importance: 1, type: 'type' },
  'http://www.w3.org/2006/vcard/ns#email': { importance: 1, type: 'email' },
  'http://www.w3.org/2006/vcard/ns#country-name': { importance: 1, type: 'country' }
}

export class DataTypes implements FormElementResolver {

  resolve(predicateUri, predicateMeta, uiQuads): FieldSuggestion | void {
    const givenFieldType = uiQuads?.fieldType

    return { importance: 0, type: givenFieldType ? givenFieldType : 'string' }
  }
}
