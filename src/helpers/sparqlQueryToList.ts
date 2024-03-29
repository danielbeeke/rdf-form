import { Language } from '../core/Language'
import { newEngine } from '../core/Comunica'
import { ProxyHandlerStatic } from '../vendor/ProxyHandlerStatic-browser'
/**
 * @param query
 * @param source
 * @param comunica
 */
 export async function sparqlQueryToList (query, source, proxy: string | undefined = undefined) {
  // TODO maybe use tokens that will less likely collide.
  query = query.toString().replace(/LANGUAGE/g, Language.uiLanguage)
  if (typeof source === 'object' && source instanceof String) source = source.toString()

  if (typeof source === 'string') source.replace('http:', location.protocol)

  const options : { sources: any, httpProxyHandler: any } = { sources: [source], httpProxyHandler: null }
  if (proxy) options.httpProxyHandler = new ProxyHandlerStatic(proxy)
  const engine = newEngine()
  const result = await engine.query(query, options);

  /** @ts-ignore */
  const bindings = await result.bindings()

  const items: Map<string, any> = new Map()

  for (const binding of bindings) {
    let label = binding.get('?label')?.id ?? binding.get('?label')?.value
    const valueAndLanguage = label.split('@')

    if (label[0] === '"' && label[label.length - 1] === '"') {
      label = label.substr(1, label.length - 2)
    }

    if (valueAndLanguage.length > 1) {
      label = {}
      label[valueAndLanguage[1].trim('"')] = valueAndLanguage[0].slice(1, -1)
    }

    const uri = binding.get('?uri')?.value
    let image = binding.get('?image')?.value
    let group = binding.get('?group')?.value

    if (!items.get(uri)) {
      items.set(uri, { label, uri, image, group })
    }
    else {
      const existingItem = items.get(uri)
      if (typeof existingItem.label === 'string' && typeof label === 'string') {
        existingItem.label = label
      }
      else {
        Object.assign(existingItem.label, label)
      }
      items.set(uri, existingItem)
    }
  }

  return [...items.values()]
}
