import { lastPart } from './lastPart'
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