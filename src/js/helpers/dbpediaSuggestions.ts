import { Language } from '../core/Language'

/**
 * @param searchTerm
 */
 export function dbpediaSuggestions (searchTerm: string) {
  // Add the following if you want to filter by dbpedia class: ?o dbo:ingredient ?uri .
  let querySearchTerm = searchTerm.trim()

  // The * does not work on dbpedia.

  const query = `

    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dbo:  <http://dbpedia.org/ontology/>
    PREFIX bif: <bif:>

    SELECT DISTINCT ?uri ?label ?image {

      ?uri rdfs:label ?label .
      ?uri dbo:thumbnail ?image .
      ?label bif:contains '"${querySearchTerm}"' .
      ${Language.uiLanguage ? `filter langMatches(lang(?label), "${Language.uiLanguage}")` : ''}
    }

    LIMIT 10`

  return { query, source: { type: 'sparql', value: 'https://dbpedia.org/sparql' }}
}