import { Language } from '../core/Language'
import { SparqlEndpointBindingsFetcher } from './SparqlEndpointBindingsFetcher'

/**
 * @param query
 * @param source
 * @param comunica
 */
 export async function sparqlQueryToList (query, source) {
  // TODO maybe use tokens that will less likely collide.
  query = query.toString().replace(/LANGUAGE/g, Language.uiLanguage)
  if (typeof source === 'object' && source instanceof String) source = source.toString()
  const bindings = await SparqlEndpointBindingsFetcher(source.value, query)

  const items: Map<string, any> = new Map()

  for (const binding of bindings) {
    let label = binding.label

    if (binding.label?.['xml:lang']) {
      label = {}
      label[binding.label?.['xml:lang']] = binding.label?.value
    }
    else {
      label = binding.label?.value
    }

    const uri = binding.uri.value
    let image = binding.image.value

    if (!items.get(uri)) {
      items.set(uri, { label, uri, image })
    }
    else {
      let existingItem = items.get(uri)
      Object.assign(existingItem.label, label)
      items.set(uri, existingItem)
    }
  }

  return [...items.values()]
}
