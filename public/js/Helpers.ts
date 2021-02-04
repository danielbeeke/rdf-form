import { ttl2jsonld } from './vendor/ttl2jsonld.js'
import { N3 } from './vendor/n3.js'
import { icon } from './vendor/fontawesome-svg-core.js'
import { Hole } from './vendor/uhtml.js'
import { Language } from './LanguageService'

export function debounce(func, wait, immediate = false) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export async function attributeToText (element, name, required = false): Promise<string> {
  let urlOrValue = element.getAttribute(name) ? element.getAttribute(name).trim() : false
  if (required && !urlOrValue) throw new Error(`The attribute ${name} does not have a content or does not exist`)

  if (urlOrValue && (urlOrValue.startsWith('http') || urlOrValue.startsWith('blob') || urlOrValue.substr(0, 1) === '/')) {
    const response = await fetch(urlOrValue)
    urlOrValue = await response.text()
  }

  return urlOrValue
}

/**
 * Given an attribute name that is used on the custom element,
 * fetches the url if needed and converts to JSON-ld.
 *
 * @param element
 * @param name
 * @param required
 */
export async function attributeToJsonLd (element, name, required = false): Promise<Array<any>> {
  const text = await attributeToText(element, name, required)
  try {
    return JSON.parse(text)
  }
  catch (e) {
    // @ts-ignore
    return text ? ttl2jsonld(text) : []
  }
}

export async function attributeToQuads (element, name, required = false): Promise<Array<any>> {
  const text = await attributeToText(element, name, required)
  const parser = new N3.Parser();
  return text ? parser.parse(text) : []
}

/**
 * When multiple graphs were found at the data attribute URL, select the one after the #.
 */
export function selectCorrectGraph (data, url) {
  if (data?.['@graph'] && url.split('#').length > 1) {

    // Multiple graphs were found at the url or inside the text.
    let found = false
    const urlId = url.split('#')[1]

    for (const graph of data['@graph']) {
      const id = lastPart(graph?.['@id'])
      if (id === urlId) {
        found = true
        return graph
      }
    }

    if (!found) throw new Error(`Could not find the graph in the data that you requested: ${urlId}`)
  }
  else {
    return data
  }
}

class FaIcon extends Hole {
  constructor(icon) {
    /** @ts-ignore */
    super('svg', [icon], []);
  }
}
export function fa (iconInput) {
  return new FaIcon(icon(iconInput).html[0])
}

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
      ${Language.current ? `filter langMatches(lang(?label), "${Language.current}")` : ''}
    }

    LIMIT 10`

  return { query, source: { type: 'sparql', value: 'https://dbpedia.org/sparql' }}
}


/**
 * @param query
 * @param source
 * @param comunica
 */
export async function sparqlQueryToList (query, source, comunica) {
  const config = {
    httpProxyHandler: comunica.httpProxyHandler
  }

  // TODO maybe use tokens that will less likely collide.
  query = query.toString().replace(/LANGUAGE/g, Language.current)
  if (typeof source === 'object' && source instanceof String) source = source.toString()

  const result = await comunica.query(query, Object.assign({ sources: [source] }, config));

  /** @ts-ignore */
  const bindings = await result.bindings()

  const items: Map<string, any> = new Map()

  for (const binding of bindings) {
    let label = binding.get('?label')?.id ?? binding.get('?label')?.value
    const valueAndLanguage = label.split('@')

    if (valueAndLanguage.length > 1) {
      label = {}
      label[valueAndLanguage[1].trim('"')] = valueAndLanguage[0].slice(1, -1)
    }
    else {
      label = label.replace(/"/g, '')
    }

    const uri = binding.get('?uri')?.value
    let image = binding.get('?image')?.value

    if (!items.get(uri)) {
      items.set(uri, { label, uri, image })
    }
    else {
      const existingItem = items.get(uri)
      Object.assign(existingItem.label, label)
      items.set(uri, existingItem)
    }
  }

  return [...items.values()]
}

export function asArray (value) {
  return Array.isArray(value) ? value : [value]
}

export const lastPart = (text) => {
  return text.split(/\:|\/|\,|\#/).pop()
}
