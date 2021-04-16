import { Language } from '../LanguageService'

/**
 * @param query
 * @param source
 * @param comunica
 */
 export async function sparqlQueryToList (query, source, comunica) {
  const config = { httpProxyHandler: comunica.httpProxyHandler }

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
      let existingItem = items.get(uri)
      Object.assign(existingItem.label, label)
      items.set(uri, existingItem)
    }
  }

  return [...items.values()]
}
