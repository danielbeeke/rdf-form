import { Language } from '../core/Language'

/**
 *
 * @param query
 * @param source
 * @param searchTerm
 */
 export function searchSuggestionsSparqlQuery (query = '', source: string | any = null, searchTerm: string = '') {
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
    source = (source as string).replace(/LANGUAGE/g, Language.uiLanguage)
    source = (source as string).replace(/SEARCH_TERM/g, querySearchTerm)
  }

  query = query.replace(/LANGUAGE/g, Language.uiLanguage)
  query = query.replace(/SEARCH_TERM/g, querySearchTerm)

  return { query, source }
}