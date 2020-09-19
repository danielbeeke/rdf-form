import { OntologyRepository } from './OntologyRepository'

export class PredicateMetaResolver {

  readonly proxy: any;
  readonly language: string;
  private fieldMetas: Map<string, object>;

  constructor(proxy: any, language: string) {
    this.proxy = proxy
    this.language = language
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
    const quads = await OntologyRepository.dereference(ontologyUri, this.proxy)

    const matches = quads ? quads.filter(
      metaQuad => metaQuad?.subject?.value === predicateUri
    ) : []

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
