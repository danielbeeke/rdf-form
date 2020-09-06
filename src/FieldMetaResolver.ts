/**
 * Fix for https://github.com/schemaorg/schemaorg/issues/2578
 * @see JsonLdParser:109
 * chunk = chunk.replace('"@context": "http://schema.org"','"@context": "https://schema.org/docs/jsonldcontext.jsonld"' )
 */

import rdfDereferencer from 'rdf-dereference'

interface OntoLogyMeta {
  promise: Promise<any>,
  quads: Array<any>
}

export class FieldMetaResolver {

  readonly proxy: any;
  readonly language: string;
  private ontologies: Map<string, OntoLogyMeta>;
  private ontologyAliases: Map<string, string>;
  private fieldMetas: Map<string, object>;

  constructor(proxy: any, language: string) {
    this.proxy = proxy
    this.language = language

    this.ontologies = new Map<string, OntoLogyMeta>()
    const ontologyAliasesCache = localStorage.ontologyAliases ? JSON.parse(localStorage.ontologyAliases) : null
    this.ontologyAliases = new Map<string, string>(ontologyAliasesCache)
    this.fieldMetas = new Map<string, object>()
  }

  async getFieldMeta (predicateUri) {
    if (this.fieldMetas.get(predicateUri)) return this.fieldMetas.get(predicateUri)

    let url = null

    try {
      url = new URL(predicateUri)
      url.hash = ''
    }
    catch {
      return
    }

    const ontologyUri = url.toString()

    const deReferencedUrl = await this.ensureOntologyMeta(ontologyUri)

    if (predicateUri && this.ontologies.get(deReferencedUrl)) {
      const matches = this.ontologies.get(deReferencedUrl).quads.filter(
        metaQuad => metaQuad?.subject?.value === predicateUri
      )

      if (matches.length) {
        const fieldMeta = {}

        matches.forEach(match => {
          const type = match.predicate.value.split('#')[1]
          if (!fieldMeta[type]) fieldMeta[type] = {}
          fieldMeta[type][match.object?.language ? match.object?.language : 'default'] = match.object.value
        })

        this.fieldMetas.set(predicateUri, fieldMeta)

        return fieldMeta
      }
    }
  }

  /**
   * Fetches and statically caches the OWL ontology
   * It caches de-referenced urls for the ontologies.
   * @param ontologyUri
   */
  async ensureOntologyMeta (ontologyUri) {
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

          if (this.proxy) {
            config['@comunica/actor-http-proxy:httpProxyHandler'] = this.proxy
          }

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
              resolve(url)
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
