import { Language } from '../LanguageService'

/**
 *
 * @param query
 * @param source
 * @param searchTerm
 */
 export function searchSuggestionsSparqlQuery (query = '', source = null, searchTerm: string = '') {
  if (searchTerm === '' || (searchTerm.length < 4)) return {}
  let querySearchTerm = searchTerm.trim()

  if (source) {
    source = { type: 'sparql', value: source }
  }

  if (!source) source = { type: 'sparql', value: 'https://dbpedia.org/sparql' }

  // if (source?.type === 'sparql' && querySearchTerm.length > 4) querySearchTerm += '*'

  if (!query) {
    query = `
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

    SELECT DISTINCT ?uri ?label {
      ?uri rdfs:label ?label .
      FILTER(contains(?label, """SEARCH_TERM"""))
    }

    LIMIT 10`
  }

  if (typeof source === 'string') {
    source = source.replace(/LANGUAGE/g, Language.current)
    source = source.replace(/SEARCH_TERM/g, querySearchTerm)
  }

  query = query.replace(/LANGUAGE/g, Language.current)
  query = query.replace(/SEARCH_TERM/g, querySearchTerm)

  return { query, source }
}