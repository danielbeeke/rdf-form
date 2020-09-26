import { OntologyRepository } from './OntologyRepository'
import { RdfForm } from './RdfForm'

export class PredicateMetaResolver {

  readonly proxy: any;
  readonly language: string;
  private fieldMetas: Map<string, object>;
  private form: RdfForm

  constructor(rdfForm: RdfForm) {
    this.form = rdfForm
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
    const quads = await this.form.ontologyRepository.dereference(ontologyUri)

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
