import { ttl2jsonld } from './vendor/ttl2jsonld.js'
import { N3 } from './vendor/n3.js'
import { icon } from './vendor/fontawesome-svg-core.js'
import { Hole } from './vendor/uhtml.js'
import { Language } from './LanguageService'

export const filterInSet = (pred, set) => {
  let found = []
  for (let item of set) if (pred(item)) found.push(item)
  return found
}

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

async function attributeToText (element, name, required = false): Promise<string> {
  let urlOrValue = element.getAttribute(name) ? element.getAttribute(name).trim() : false

  if (required && !urlOrValue) throw new Error(`The attribute ${name} does not have a content or does not exist`)

  if (urlOrValue && ['http', 'blob'].includes(urlOrValue.substr(0, 4) || urlOrValue.substr(0, 1) === '/')) {
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
      const id = graph['@id'].split(':')[1]
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

const loaderPromises = new Map()

export function waiter (reference, promiseFunction, callback) {
  let promise = loaderPromises.get(reference);

  if (!promise) {
    promise = promiseFunction.then ? promiseFunction : new Promise(promiseFunction)
    loaderPromises.set(reference, promise)
  }

  if (promise.then) {
    promise.then(meta => {
      loaderPromises.set(reference, meta ?? 'error')
      callback()
    })
    return { loading: true }
  }
  else {
    return promise
  }
}

export async function fetchObjectByPredicates (flexPath, language, predicates, uri = null) {
  let subject = uri

  if (uri) {
    let extensionlessUri = uri.split('.')
    extensionlessUri.pop()
    extensionlessUri = extensionlessUri.join('.')
    subject = extensionlessUri
  }

  for (const predicate of predicates) {
    let value = await flexPath[predicate]['@' + language]
    if (!value) value = await flexPath[predicate]

    // TODO this is a fallback for nested subject paths.. how should this have been done properly?
    if (!value && subject) {
      for await (const innerSubject of flexPath.subjects) {
        if (`${innerSubject}` === subject) {
          value = await innerSubject[predicate]
        }
      }
    }
    if (value) return value.toString()
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
  if (searchTerm === '' || (searchTerm.length < 4)) return
  let querySearchTerm = searchTerm.trim()
  if (source?.type === 'sparql' && querySearchTerm.length > 4) querySearchTerm += '*'

  if (!source) source = { type: 'sparql', value: 'https://dbpedia.org/sparql' }

  if (!query) {
    query = `

    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

    SELECT DISTINCT ?uri ?label {

      ?uri rdfs:label ?label .

      FILTER(contains(?label, "'SEARCH_TERM'"))
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
  if (querySearchTerm.length > 4) querySearchTerm += '*'

  const query = `

    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dbo:  <http://dbpedia.org/ontology/>
    PREFIX bif: <bif:>

    SELECT DISTINCT ?uri ?label ?image {

      ?uri rdfs:label ?label .
      ?uri dbo:thumbnail ?image .

      ?label bif:contains "'${querySearchTerm}'" .

      filter langMatches(lang(?label), "${Language.current}")
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
  const config = {}

  if (comunica.httpProxyHandler) {
    // TODO make the proxy always work.
    // config['httpProxyHandler'] = comunica.httpProxyHandler
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
      label = label.slice(1, -1)
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

export function jsonLdValue(value) {
  if (Array.isArray(value) && value[0]?.['@language']) {
    return Language.multilingualValue(value)
  }
  else if (Array.isArray(value)) {
    return value.map(item => item['@value'] ?? item['@id'])
  }
  else if (value?.['@id'] || value?.['@value']) {
    return value?.['@id'] ?? value?.['@value']
  }
  else {
    return value ?? ''
  }
}

export function asArray (value) {
  return Array.isArray(value) ? value : [value]
}

export const lastPart = (text) => {
  return text.split(/\:|\/|\,|\#/).pop()
}
