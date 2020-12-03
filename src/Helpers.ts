import { parse as ttl2jsonld } from '@frogcat/ttl2jsonld'
import * as N3 from 'n3'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { Hole } from 'uhtml';
import {Language} from "./LanguageService";
import {newEngine} from "@comunica/actor-init-sparql";
import {IDuration} from "./Types";

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

  if (urlOrValue && urlOrValue.slice(-3)) {
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
      loaderPromises.set(reference, meta)
      callback()
    })
    return { loading: true }
  }
  else {
    return promise
  }
}

export async function fetchObjectByPredicates (flexPath, language, predicates) {
  for (const predicate of predicates) {
    let value = await flexPath[predicate]['@' + language]
    if (!value) value = await flexPath[predicate]
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
export function searchSuggestionsSparqlQuery (query, source = null, searchTerm: string = '') {
  if (searchTerm === '' || (searchTerm.length < 4)) return
  let querySearchTerm = searchTerm.trim()
  if (querySearchTerm.length > 4) querySearchTerm += '*'

  if (!source) source = { type: 'sparql', value: 'https://dbpedia.org/sparql' }

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
 * @param proxy
 */
export async function sparqlQueryToList (query, source, proxy) {
  const config = {}
  const disabledProxy = source.value === 'https://dbpedia.org/sparql'
  if (proxy && !disabledProxy) config['httpProxyHandler'] = proxy
  const myEngine = newEngine();

  // TODO maybe use tokens that will less likely collide.
  query = query.replace(/LANGUAGE/g, Language.current)
  const result = await myEngine.query(query, Object.assign({ sources: [source] }, config));

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

const iso8601DurationRegex = /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;
export function parseISO8601Duration (iso8601Duration = '') {
  const matches = iso8601Duration.match(iso8601DurationRegex)

  return {
    sign: matches?.[1] === undefined ? '+' : '-',
    years: matches?.[2] ? parseInt(matches[2]) : 0,
    months: matches?.[3] ? parseInt(matches[3]) : 0,
    weeks: matches?.[4] ? parseInt(matches[4]) : 0,
    days: matches?.[5] ? parseInt(matches[5]) : 0,
    hours: matches?.[6] ? parseInt(matches[6]) : 0,
    minutes: matches?.[7] ? parseInt(matches[7]) : 0,
    seconds: matches?.[8] ? parseInt(matches[8]) : 0
  }
}

export function serializeISO9601Duration (duration: IDuration) {
  console.log(duration)
}
