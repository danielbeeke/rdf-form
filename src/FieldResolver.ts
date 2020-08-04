import { ProxyHandlerStatic } from '@comunica/actor-http-proxy'
import { newEngine } from '@comunica/actor-init-sparql'
import { IActorQueryOperationOutput } from '@comunica/bus-query-operation'
import { OpenGraph } from './resolvers/OpenGraph'
import { W3 } from './resolvers/w3'
import { SchemaOrg } from './resolvers/schema.org'
import { FieldTypes } from './FieldTypes'
import { Quad } from './Quad'

export interface FieldResolverFields {
  predicate: Map<string, string>;
  dataType: Map<string, string>;
}

type FieldResolverTypes = keyof FieldResolverFields;

export class FieldResolver {
  private resolvers: Array<FieldResolverInterface> = [new SchemaOrg(), new W3(), new OpenGraph()]

  private fields: FieldResolverFields = {
    predicate: new Map(),
    dataType: new Map()
  }

  constructor () {
    for (const resolver of this.resolvers) {
      resolver.addDefinitions(this)
    }
  }

  set (what: FieldResolverTypes, key: string, fieldType: FieldTypes) {
    this.fields[what].set(key, fieldType)
  }

  resolve (quad: Quad): FieldTypes | undefined {
    let resolvedFieldType: FieldTypes | undefined

    const resolvedPredicateFieldType = this.fields.predicate.get(quad.predicate.value)

    for (const fieldType of Object.values(FieldTypes)) {
      if (fieldType === resolvedPredicateFieldType) resolvedFieldType = fieldType
    }

    const resolvedDataTypeFieldType = this.fields.dataType.get(quad.object.termType)
    for (const fieldType of Object.values(FieldTypes)) {
      if (fieldType === resolvedDataTypeFieldType) resolvedFieldType = fieldType
    }

    quad.fieldLabel = ''

    if (resolvedFieldType) {
      this.getLabel(quad).then((description: string) => {
        quad.fieldLabel = description
      })
    }

    return resolvedFieldType
  }

  getLabel (quad: Quad): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        newEngine().query('CONSTRUCT WHERE { ?s <http://www.w3.org/2000/01/rdf-schema#comment> ?o }',
          {
            sources: [quad.predicate.value],
            httpProxyHandler: new ProxyHandlerStatic('https://thingproxy.freeboard.io/fetch/')
          })
          .then((result: IActorQueryOperationOutput) => {
            if ('quadStream' in result) {
              result.quadStream.on('data', (quad: Quad) => {
                if (quad.object && quad.object.id) {
                  const description = quad.object.id.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, '')
                  console.log(description)
                  resolve(description)
                }
              })

              result.quadStream.on('error', (error) => {
                console.log(error, quad)
                error = null
              })
            }

            result.metadata().then(metadata => {
              if (metadata.totalItems !== Infinity) {
                reject(new Error('Reached end'))
              }
            }).catch((error) => {
              error = null
            })
          })
      } catch (e) {}
    })
  }
}

export interface FieldResolverInterface {
  addDefinitions(fieldResolver: FieldResolver): void;
}
