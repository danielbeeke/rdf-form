import { selectCorrectGraph } from '../../public/js/helpers/selectCorrectGraph'
import { searchSuggestionsSparqlQuery } from '../../public/js/helpers/searchSuggestionsSparqlQuery'
import { lastPart } from '../../public/js/helpers/lastPart'
import { dbpediaSuggestions } from '../../public/js/helpers/dbpediaSuggestions'
import { attributeToText, attributeToJsonLd, attributeToQuads, } from '../../public/js/helpers/attribute'

describe('attributeToText and attributeToJsonLd', function () {
  it('should get the attribute and fetch if it is a URL', async function () {
    const element = document.createElement('div')
    element.setAttribute('data',  'http://localhost:8070/fields.form.ttl')
    const formDefinition = await attributeToText(element, 'data')
    expect(formDefinition).to.contain('@prefix form:')

    try {
      await attributeToText(element, 'missing', true)
    }
    catch (e) {
      expect(e.message).to.contain('attribute missing')
    }

    const formDefinitionJsonLd = await attributeToJsonLd(element, 'data')

    expect(formDefinitionJsonLd['@context']['fieldsForm']).to.be.equal('http://localhost:8070/fields.form.ttl#')
  })
})

describe('attributeToQuads', () => {
  it('should get the attribute and fetch if it is a URL', async function () {
    const element = document.createElement('div')
    element.setAttribute('data',  'http://localhost:8070/fields.form.ttl')
    const formDefinition = await attributeToQuads(element, 'data')
    const thingQuad = formDefinition.find(field => field.object.id === 'http://schema.org/Thing')
    expect(thingQuad.subject.id).to.be.equal('http://localhost:8070/fields.form#fieldsForm')
  })
})

describe('selectCorrectGraph', () => {
  it('should select the correct graph', async function () {
    const graph = {
      '@graph': [
        {
          '@id': 'one',
        },
        {
          '@id': 'two',
        }
      ]
    }

    const correctGraph = selectCorrectGraph(graph, 'http://example.com/data#two')
    expect(correctGraph['@id']).to.be.equal('two')

    try {
      selectCorrectGraph(graph, 'http://example.com/data#missing')
    }
    catch (e) {
      expect(e.message).to.contain('Could not find the graph')
    }

    const wholeGraph = selectCorrectGraph(graph['@graph'], 'http://example.com/data#two')
    expect(wholeGraph).to.be.equal(graph['@graph'])
  })
})

describe('lastPart', function () {
  it('should split off the last part of URI, URL or string', function () {

    expect(lastPart('http://example.com/data/ontology.ttl#Person')).to.be.equal('Person')
    expect(lastPart('http://example.com/data/ontology.ttl')).to.be.equal('ontology.ttl')
    expect(lastPart('schema:name')).to.be.equal('name')
    expect(lastPart('https://schema.org/name')).to.be.equal('name')

  })
})

describe('dbpediaSuggestions', async () => {
  it('should prepare a query', function () {
    const { query, source } = dbpediaSuggestions('Lorem ipsum')
    expect(source.value).to.be.equal('https://dbpedia.org/sparql')
    expect(query).to.contain('"Lorem ipsum"')
    expect(query).to.contain('filter langMatches(lang(?label), "en")')
  })
})

describe('searchSuggestionsSparqlQuery', async () => {
  it('should prepare a query', function () {
    const { query, source } = searchSuggestionsSparqlQuery(`

    PREFIX schema: <https://schema.org/>

    SELECT * {
      ?uri schema:name ?label .
      OPTIONAL { ?uri schema:image ?image . }
      FILTER(contains(?label, """SEARCH_TERM"""))
    }

    `, null, 'Lorem')

    expect(source.value).to.be.equal('https://dbpedia.org/sparql')
    expect(query).to.contain('"""Lorem"""')
  })
})
