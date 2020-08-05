import { FieldResolverInterface, FieldResolver } from '../FieldResolver'
import { Quad } from '../Quad'
import { ProxyHandlerStatic } from '@comunica/actor-http-proxy'
import { newEngine } from '@comunica/actor-init-sparql'
import { IActorQueryOperationOutput } from '@comunica/bus-query-operation'

export class BaseFieldResolver implements FieldResolverInterface {
  addDefinitions (fieldResolver: FieldResolver) {
    console.error('Please implement in the field resolver: ', fieldResolver)
  }

  getLabel (quad: Quad): Promise<string | undefined> {
    return this.getLabelFetcher(quad.predicate.value)
  }

  getLabelFetcher (source: string | object, query = 'CONSTRUCT WHERE { ?s <http://www.w3.org/2000/01/rdf-schema#comment> ?o }'): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      try {
        newEngine().query(query,
          {
            sources: [source],
            httpProxyHandler: new ProxyHandlerStatic('https://thingproxy.freeboard.io/fetch/')
          })
          .then((result: IActorQueryOperationOutput) => {
            if ('quadStream' in result) {
              result.quadStream.on('data', (quad: Quad) => {
                if (quad.object.id) {
                  const description = quad.object.id.split('"')[1]
                  resolve(description)
                } else {
                  console.log(quad)
                }
              })

              result.quadStream.on('error', (error) => {
                console.log(error)
                error = null
              })
            }

            if ('metadata' in result && typeof result.metadata === 'function') {
              result.metadata().then(metadata => {
                if (metadata.totalItems !== Infinity) {
                  reject(new Error('Reached end'))
                }
              }).catch((error) => {
                error = null
              })
            }
          })
      } catch (e) {
        console.log(e)
      }
    })
  }
}
