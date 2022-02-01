const metas = new Map()
import { lastPart } from './lastPart'
import { Language } from '../core/Language'
import { applyProxy } from './applyProxy'
import { engine } from '../core/Comunica'
import { streamToString } from './streamToString'

export const getUriMeta = async (uri: string, proxy: string | null = null) => {
  if (!metas.get(uri + Language.uiLanguage)) {
    const response = await engine.query(`DESCRIBE <${uri}>`, {
      sources: [ applyProxy(uri, proxy) ]
    })
    
    const { data } = await engine.resultToString(response, 'application/ld+json');
    const resultString = await streamToString(data);
    let [ json ] = JSON.parse(resultString)

    if (!json) json = {}

    const meta = {
      label: null,
      thumbnail: null,
    }

    const labelLastParts = ['name', 'username', 'label']
    const imageLastParts = ['thumbnail', 'depiction', 'image', 'img']

    for (const labelLastPart of labelLastParts) {
      for (const [predicate, value] of Object.entries(json)) {
        if (!meta.label && labelLastPart === lastPart(predicate)) {
          const valueInPreferredLanguage = (value as Array<any>).find(item => item['@language'] === Language.uiLanguage)
          const valueInUndeterminedLanguage = (value as Array<any>).find(item => item['@language'] === 'und')
          /** @ts-ignore */
          meta.label = valueInPreferredLanguage?.['@value'] ?? valueInUndeterminedLanguage?.['@value'] ?? value?.[0]?.['@value']
        }
  
        if ((meta.label ?? '').substr(0, 2) === '_:') meta.label = null
      }  
    }

    for (const imageLastPart of imageLastParts) {
      for (const [predicate, value] of Object.entries(json)) {
        if (!meta.thumbnail && imageLastPart === lastPart(predicate)) {
          const valueInPreferredLanguage = (value as Array<any>).find(item => item['@language'] === Language.uiLanguage)
          const valueInUndeterminedLanguage = (value as Array<any>).find(item => item['@language'] === 'und')
          meta.thumbnail = valueInPreferredLanguage?.['@value'] ?? valueInPreferredLanguage?.['@id'] ?? 
          valueInUndeterminedLanguage?.['@value'] ?? valueInUndeterminedLanguage?.['@id'] ?? 
          /** @ts-ignore */
          value?.[0]?.['@value'] ?? value?.[0]?.['@id']
  
          /** @ts-ignore */
          if (meta.thumbnail?.substr(0, 2) === '_:') meta.thumbnail = false
  
          /** @ts-ignore */
          if (!meta.thumbnail && value?.[0]?.['https://schema.org/url']?.[0]?.['@value']) {
            /** @ts-ignore */
            meta.thumbnail = value[0]['https://schema.org/url'][0]['@value']
          }
        }
      }  
    }

    /** @ts-ignore */
    if (!meta.label) meta.label = false
    /** @ts-ignore */
    if (!meta.thumbnail) meta.thumbnail = false

    metas.set(uri + Language.uiLanguage, meta)
  }

  return metas.get(uri + Language.uiLanguage)
}