import { sparqlQueryToList } from '../../../public/js/helpers/sparqlQueryToList'
import { Comunica } from '../../../public/js/vendor/comunica-browser.js'

describe('sparqlQueryToList', function () {
  const source = `http://localhost:8070/multilingual.ttl`
  const query = `
  PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs:    <http://www.w3.org/2000/01/rdf-schema#>
  SELECT ?uri ?label
  {
    ?uri rdfs:label ?label .
  }`
  
  it('should return two items', async function () {
    const comunica = Comunica.newEngine()
    comunica.httpProxyHandler = null
    sparqlQueryToList(query, source, comunica).then(result => {
      expect(result[0].label.nl).to.equal('Voorbeeld 1')
      expect(result[0].label.en).to.equal('Example 1')  
    })
  })
})