import { RdfForm } from './RdfForm'

/**
 *
 * @param predicate
 * @param data
 * @param formDefinition
 * @param jsonLdContext
 * @constructor
 */
export class FormElementFactory {
  private form: RdfForm

  constructor(rdfForm: RdfForm) {
    this.form = rdfForm
  }

  async create (predicateUri, data): Promise<any> {
    let predicateUriExpanded = predicateUri
    for (const [alias, uri] of Object.entries(this.form.jsonLdContext)) {
      predicateUriExpanded = predicateUriExpanded.replace(alias + ':', uri)
    }

    const predicateMeta = await this.form.predicateMetaResolver.getFieldMeta(predicateUriExpanded)
    const formElementType = this.form.formElementResolverRegistry.resolve(predicateUriExpanded, predicateMeta)
    const formElement = this.form.formElementRegistry.get(formElementType, predicateUri, data)
    await formElement.init()
    return formElement
  }

  async handleData (data, pointer, children) {
    for (const [predicate, childData] of Object.entries(data)) {
      pointer[predicate] = await this.form.formElementFactory.create(predicate, childData)
      children.push(predicate)
    }
  }
}
