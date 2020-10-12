import { newEngine } from '@comunica/actor-init-sparql'
import { parse as ttl2jsonld } from '@frogcat/ttl2jsonld'
import * as N3 from 'n3'

export const findInSet = (pred, set) => {
  for (let item of set) if (pred(item)) return item
}

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

export async function cachePromiseOutput(callback, time = 3600, ...parameters) {
  const cache = localStorage?.['cache_' + callback.name] ? JSON.parse(localStorage['cache_' + callback.name]) : null
  if (cache && cache.timestamp > (Date.now() / 1000)) return cache.value
  const output = await callback(...parameters)

  localStorage['cache_' + callback.name] = JSON.stringify({
    value: output,
    timestamp: (Date.now() / 1000) + time
  })

  return output
}

/**
 * Fetches a list of languages.
 * @param form
 */
export async function getLanguages (form) {
  return getWikidataKeyLabel(form, 'wdt:P218')
}

/**
 * Fetches a list of countries.
 * @param form
 */
export async function getCountries (form) {
  return getWikidataKeyLabel(form, 'wdt:P297')
}

/**
 * Returns a key-label(s) object by a property like: wdt:P297
 * @param form
 * @param property
 */
async function getWikidataKeyLabel(form, property) {
  let list = {}

  const comunica = newEngine();
  const wikidataQuery = `
    PREFIX wdt: <http://www.wikidata.org/prop/direct/>

    SELECT ?key ?label WHERE {
      ?object ${property} ?key .
      ?object rdfs:label ?label ;
      FILTER (lang(?label) = '${form.language}')
    }
    ORDER BY ASC(?label)
  `

  const result = await comunica.query(wikidataQuery, {
    sources: [{ value: 'https://query.wikidata.org/sparql', type: 'sparql' }],
  });

  /** @ts-ignore */
  const items = await result.bindings()

  for (const item of items) {
    const key = item.get('?key').value
    const label = item.get('?label').value
    if (!list[key]) list[key] = []
    list[key].push(label)
  }

  return list
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
  return text ? ttl2jsonld(text) : []
}

export async function attributeToQuads (element, name, required = false): Promise<Array<any>> {
  const text = await attributeToText(element, name, required)
  const parser = new N3.Parser();
  return text ? parser.parse(text) : []
}

export function getObjectOfQuadByPredicate (predicate, quads, language = null) {
  const quad = quads.find(quad => quad.predicate.value === predicate && (quad.object.language === language || language === null))
  return quad && (quad.object?.value ?? quad.object?.id)
}

export function sortFormElements (a, b) {
  let aWeight = a.uiSettings?.order ?? 0
  let bWeight = b.uiSettings?.order ?? 0
  return aWeight - bWeight
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
