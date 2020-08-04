import { newEngine } from '@comunica/actor-init-sparql'
import { ProxyHandlerStatic } from '@comunica/actor-http-proxy'
import 'setimmediate'
import { IActorQueryOperationOutput } from '@comunica/bus-query-operation'
import { Quad } from './Quad'

export class RdfManager extends EventTarget {
  private rdf: URL
  private quads: Array<Quad> = []

  constructor (rdf: URL) {
    super()
    this.rdf = rdf
    this.fetchQuery()
  }

  fetchQuery () {
    newEngine().query('CONSTRUCT WHERE { ?s ?p ?o }',
      {
        sources: [this.rdf],
        httpProxyHandler: new ProxyHandlerStatic('https://thingproxy.freeboard.io/fetch/')
      })
      .then((result: IActorQueryOperationOutput) => {
        if ('quadStream' in result) {
          result.quadStream.on('data', (quad: Quad) => {
            this.quads.push(quad)
            this.dispatchEvent(new CustomEvent('quadAdded', {
              detail: { quad }
            }))
          })
        }
      })
  }

  resolveField (quad: Quad) {
    return false
  }
}
