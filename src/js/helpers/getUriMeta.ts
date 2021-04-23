const metas = new Map()
import { ttl2jsonld } from '../vendor/ttl2jsonld'
import { jsonld as JsonLdProcessor } from '../vendor/jsonld.js'
import { lastPart } from './lastPart'
import { Language } from '../core/Language'

export const getUriMeta = async (uri: string, proxy: string = null) => {
  if (!metas.get(uri)) {
    const response = await fetch(`${proxy}${uri}`, { headers: { 'Accept': 'application/ld+json' }})
    const text = await response.text()
    let json
    try { json = JSON.parse(text) }
    catch (e) {
      json = ttl2jsonld(text)
    }

    json = await JsonLdProcessor.expand(json)
    if (Array.isArray(json)) json = json[0]

    const meta = {
      label: null,
      thumbnail: null,
    }

    const labelLastParts = ['name', 'username', 'label']
    const imageLastParts = ['thumbnail', 'depiction', 'image', 'img']

    for (const [predicate, value] of Object.entries(json)) {
      if (!meta.label && labelLastParts.includes(lastPart(predicate))) {
        const valueInPreferredLanguage = (value as Array<any>).find(item => item['@language'] === Language.uiLanguage)
        const valueInUndeterminedLanguage = (value as Array<any>).find(item => item['@language'] === 'und')
        meta.label = valueInPreferredLanguage?.['@value'] ?? valueInUndeterminedLanguage?.['@value'] ?? value?.[0]?.['@value']
      }

      if (meta.label?.substr(0, 2) === '_:') meta.label = false

      if (!meta.thumbnail && imageLastParts.includes(lastPart(predicate))) {
        const valueInPreferredLanguage = (value as Array<any>).find(item => item['@language'] === Language.uiLanguage)
        const valueInUndeterminedLanguage = (value as Array<any>).find(item => item['@language'] === 'und')
        meta.thumbnail = valueInPreferredLanguage?.['@value'] ?? valueInPreferredLanguage?.['@id'] ?? 
        valueInUndeterminedLanguage?.['@value'] ?? valueInUndeterminedLanguage?.['@id'] ?? 
        value?.[0]?.['@value'] ?? value?.[0]?.['@id']

        if (meta.thumbnail?.substr(0, 2) === '_:') meta.thumbnail = false
      }
    }

    if (!meta.label) meta.label = false
    if (!meta.thumbnail) meta.thumbnail = false

    metas.set(uri, meta)
  }

  return metas.get(uri)
}