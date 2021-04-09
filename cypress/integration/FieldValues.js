import { wrapWithProxy } from '../../public/js/FieldValues'
import { ttl2jsonld } from '../../public/js/vendor/ttl2jsonld'
import * as JsonLdProcessor from '../../public/js/vendor/jsonld';

describe('wrapWithProxy', function () {
  it('should be posible to access @list like it is a standard array', async function () {
    const response = await fetch('http://localhost:8070/fields.ttl')
    const text = await response.text()
    const jsonLd = ttl2jsonld(text)
    const expanded = await JsonLdProcessor.expand(jsonLd)
    const data = wrapWithProxy(expanded[0], ['http://rdf.danielbeeke.nl/recipe/recipe-dev.ttl#ingredients'], true)
    expect(data['ingredients'][0]['http://rdf.danielbeeke.nl/recipe/recipe-dev.ttl#ingredient'][0]['@id']).to.be.equal('http://dbpedia.org/resource/Tomato')
  })
})