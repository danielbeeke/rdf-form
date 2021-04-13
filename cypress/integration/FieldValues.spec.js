import { wrapWithProxy } from '../../public/js/FieldValues'
import { ttl2jsonld } from '../../public/js/vendor/ttl2jsonld'
import * as JsonLdProcessor from '../../public/js/vendor/jsonld';

describe('wrapWithProxy', function () {
  it('should be posible to access group @list like it is a standard array', async function () {
    const response = await fetch('http://localhost:8070/fields.ttl')
    const text = await response.text()
    const jsonLd = ttl2jsonld(text)
    const expanded = await JsonLdProcessor.expand(jsonLd)
    const data = wrapWithProxy(expanded[0], ['http://rdf.danielbeeke.nl/recipe/recipe-dev.ttl#ingredients'], true)
    expect(data['ingredients'][0]['http://rdf.danielbeeke.nl/recipe/recipe-dev.ttl#ingredient'][0]['@id']).to.be.equal('http://dbpedia.org/resource/Tomato')
  })

  it('should be posible to access list @list like it is a standard array', async function () {
    const response = await fetch('http://localhost:8070/jane-doe.ttl')
    const text = await response.text()
    const jsonLd = ttl2jsonld(text)
    const expanded = await JsonLdProcessor.expand(jsonLd)

    const imageUrl = expanded[0]["http://schema.org/image"][0]["@list"][0]["http://schema.org/url"][0]["@value"]

    const data = wrapWithProxy(expanded[0], [
      'http://schema.org/url', 
      'http://schema.org/height', 
      'http://schema.org/width', 
      'http://localhost:8070/focalPoint.ttl#x1', 
      'http://localhost:8070/focalPoint.ttl#x2',
      'http://localhost:8070/focalPoint.ttl#y1',
      'http://localhost:8070/focalPoint.ttl#y2',
    ], false, true, 'http://schema.org/image')
    expect(imageUrl).to.be.equal(data['image'][0]['@value'])
    expect(100).to.be.equal(data['height'][0]['@value'])
  })
})