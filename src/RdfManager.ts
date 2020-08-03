import { newEngine } from '@comunica/actor-init-sparql'
import { ProxyHandlerStatic } from '@comunica/actor-http-proxy'
import 'setimmediate'

export class RdfManager extends EventTarget {
  private rdf: URL
  private triples: Array<Array<string>> = []

  constructor (rdf: URL) {
    super()
    this.rdf = rdf
    this.initialize()
  }

  initialize () {
    newEngine().query('CONSTRUCT WHERE { ?s ?p ?o }',
      {
        sources: [this.rdf],
        httpProxyHandler: new ProxyHandlerStatic('https://thingproxy.freeboard.io/fetch/')
      })
      .then((result) => {
        result.quadStream.on('data', (quad) => {
          this.triples.push(quad)
          this.dispatchEvent(new CustomEvent('quadAdded', {
            detail: { quad }
          }))
        })
      })
  }
}
