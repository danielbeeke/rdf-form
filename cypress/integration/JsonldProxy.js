import { JsonLdProxy } from '../../src/js/core/JsonLdProxy'
import { jsonld } from '../../src/js/vendor/jsonld.js'

const book = {
  "@context": "https://schema.org",
  "@type": "Book",
  "accessibilityAPI": "ARIA",
  "accessibilityControl": [
    "fullKeyboardControl",
    "fullMouseControl"
  ],
  "accessibilityFeature": [
    "largePrint/CSSEnabled",
    "highContrast/CSSEnabled",
    "resizeText/CSSEnabled",
    "displayTransformability",
    "longDescription",
    "alternativeText"
  ],
  "accessibilityHazard": [
    "noFlashingHazard",
    "noMotionSimulationHazard",
    "noSoundHazard"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "reviewCount": "0"
  },
  "bookFormat": "EBook/DAISY3",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Holt, Rinehart and Winston"
  },
  "copyrightYear": "2007",
  "description": "NIMAC-sourced textbook",
  "genre": "Educational Materials",
  "inLanguage": "en-US",
  "isFamilyFriendly": "true",
  "isbn": "9780030426599",
  "name": "Holt Physical Science",
  "numberOfPages": "598",
  "publisher": {
    "@type": "Organization",
    "name": "Holt, Rinehart and Winston"
  }
}

describe('JsonldProxy', function () {
  it('should be possible to get various paths through the object', async function () {
    const expandedBook = await jsonld.expand(book)
    const bookProxy = JsonLdProxy(expandedBook[0], {
      'schema': 'http://schema.org/'
    }, {}, 'schema')
    expect(bookProxy['copyrightHolder'][0]['name'][0]['@value']).to.be.equal('Holt, Rinehart and Winston')
    expect(bookProxy['copyrightHolder']._['name']._).to.be.equal('Holt, Rinehart and Winston')
  })
})
