import { ttl2jsonld } from '../vendor/ttl2jsonld.js'
import { N3 } from '../vendor/n3.js'

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
