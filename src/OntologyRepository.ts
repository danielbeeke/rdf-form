/**
 * Fix for https://github.com/schemaorg/schemaorg/issues/2578
 * @see JsonLdParser:109
 * chunk = chunk.replace('"@context": "http://schema.org"','"@context": "https://schema.org/docs/jsonldcontext.jsonld"' )
 */

import rdfDereferencer from "rdf-dereference";
import { OntoLogyMeta } from './Types'

class OntologyRepositoryClass {

  private ontologies: Map<string, OntoLogyMeta>;
  private ontologyAliases: Map<string, string>;

  constructor() {
    this.ontologies = new Map<string, OntoLogyMeta>()
    const ontologyAliasesCache = localStorage.ontologyAliases ? JSON.parse(localStorage.ontologyAliases) : null
    this.ontologyAliases = new Map<string, string>(ontologyAliasesCache)
  }

  async dereference (ontologyUri, proxy: any | null) {
    ontologyUri = ontologyUri.split('#')[0]
    const deReferencedUrl = this.ontologyAliases.get(ontologyUri)
    if (deReferencedUrl) ontologyUri = deReferencedUrl

    if (!this.ontologies.get(ontologyUri)) {
      const ontologyMeta: OntoLogyMeta = {
        quads: [],
        promise: null
      }

      const ontologyPromise = new Promise(async (resolve): Promise<void> => {
        this.ontologies.set(ontologyUri, ontologyMeta)

        try {
          const config = {}
          if (proxy) config['@comunica/actor-http-proxy:httpProxyHandler'] = proxy

          let { quads, url } = await rdfDereferencer.dereference(ontologyUri, config);

          quads
            .on('error', () => {
              // On error we simply leave this one empty.
              // It may be a hiccup or something unknown.
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
          resolve(deReferencedUrl)
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

export const OntologyRepository = new OntologyRepositoryClass()
