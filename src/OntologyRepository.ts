/**
 * Fix for https://github.com/schemaorg/schemaorg/issues/2578
 * @see JsonLdParser:109
 * chunk = chunk.replace('"@context": "http://schema.org"','"@context": "https://schema.org/docs/jsonldcontext.jsonld"' )
 */

import rdfDereferencer from 'rdf-dereference'
import { OntoLogyMeta } from './Types'
import { RdfForm } from './RdfForm'

export class OntologyRepository {

  private ontologies: Map<string, OntoLogyMeta>;
  private ontologyAliases: Map<string, string>;
  private form: RdfForm
  readonly uriChangers: Array<any> = []

  constructor(rdfForm: RdfForm) {
    this.form = rdfForm
    this.ontologies = new Map<string, OntoLogyMeta>()
    const ontologyAliasesCache = localStorage.ontologyAliases ? JSON.parse(localStorage.ontologyAliases) : null
    this.ontologyAliases = new Map<string, string>(ontologyAliasesCache)
    this.ontologyAliases.set('http://ogp.me/ns', 'https://raw.githubusercontent.com/Parsely/schemato/master/schemato/schema_defs/ogp.me.ttl')
  }

  registerUriChanger (uriChanger: any) {
    this.uriChangers.push(uriChanger)
  }

  async dereference (ontologyUri) {
    ontologyUri = ontologyUri.split('#')[0]
    const deReferencedUrl = this.ontologyAliases.get(ontologyUri)
    if (deReferencedUrl) ontologyUri = deReferencedUrl

    if (!this.ontologies.get(ontologyUri)) {
      const ontologyMeta: OntoLogyMeta = {
        quads: [],
        promise: null
      }

      const ontologyPromise = new Promise(async (resolve, reject): Promise<void> => {
        this.ontologies.set(ontologyUri, ontologyMeta)

        try {
          const config = {}
          config['@comunica/actor-http-proxy:httpProxyHandler'] = this.form.proxy

          let { quads, url } = await rdfDereferencer.dereference(ontologyUri, config);

          quads
            .on('error', error => {
              // On error we simply leave this one empty.
              // It may be a hiccup or something unknown.
              console.log(error)
              this.ontologies.delete(ontologyUri)
            })
            .on('data', (quad) => {
              ontologyMeta.quads.push(quad)
              this.ontologies.set(url, ontologyMeta)
              if (url !== ontologyUri) this.ontologyAliases.set(ontologyUri, url)
              localStorage.ontologyAliases = JSON.stringify(Array.from(this.ontologyAliases.entries()));
            })
            .on('end', () => {
              resolve(ontologyMeta.quads)
            })
        }
        catch (exception) {
          console.log(exception)
          reject(deReferencedUrl)
        }
      })

      ontologyMeta.promise = ontologyPromise

      return ontologyPromise
    }
    else {
      return this.ontologies.get(ontologyUri).promise
    }
  }

}
