import rdfDereferencer from 'rdf-dereference'

interface OntoLogyMeta {
  promise: Promise<any>,
  quads: Array<any>
}

export class FieldMetaResolver {

  readonly proxy: any;
  private ontologies: Map<string, OntoLogyMeta>;
  private fieldMetas: Map<string, object>;

  constructor(proxy: any) {
    this.proxy = proxy
    this.ontologies = new Map<string, OntoLogyMeta>()
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

    await this.ensureOntologyMeta(ontologyUri)

    if (predicateUri) {
      const matches = this.ontologies.get(ontologyUri).quads.filter(
        metaQuad => metaQuad?.subject?.value === predicateUri &&
          [
            'http://www.w3.org/2000/01/rdf-schema#label',
            'http://www.w3.org/2000/01/rdf-schema#comment',
          ].includes(metaQuad.predicate.value)
      )

      if (matches.length) {
        const fieldMeta = {}

        matches.forEach(match => {
          const type = match.predicate.value.split('#')[1]
          fieldMeta[type] = match.object.value
        })

        this.fieldMetas.set(predicateUri, fieldMeta)

        return fieldMeta
      }
    }
  }

  /**
   * Fetches and statically caches the OWL ontology
   * @param ontologyUri
   */
  async ensureOntologyMeta (ontologyUri) {
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

          let { quads } = await rdfDereferencer.dereference(ontologyUri.toString(), config);
          quads
            .on('error', (error) => {
              // On error we simply leave this one empty.
              // It may be a hiccup or something unknown.
              this.ontologies.delete(ontologyUri)
            })
            .on('data', (quad) => {
              ontologyMeta.quads.push(quad)
              this.ontologies.set(ontologyUri, ontologyMeta)
            })
            .on('end', () => {
              resolve()
            })
        }
        catch (exception) {
          resolve()
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
