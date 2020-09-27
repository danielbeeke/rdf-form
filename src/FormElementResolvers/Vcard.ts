import {FieldSuggestion, FormElementData, FormElementResolver, PredicateMeta, Quad} from '../Types'

export class Vcard implements FormElementResolver {

  resolve(predicateUri, predicateMeta, uiQuads): FieldSuggestion | void {
    // if (
    //   quad.predicate?.id === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#value' &&
    //   formElementData.parent.quads[0].predicate.id === 'http://www.w3.org/2006/vcard/ns#tel'
    // ) {
    //   return { importance: 5, type: 'phone'}
    // }
    //
    // if (quad.predicate?.id === 'http://www.w3.org/2006/vcard/ns#adr') {
    //   return { importance: 5, type: 'address'}
    // }
  }
}
