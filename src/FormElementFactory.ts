import { RdfForm } from './RdfForm'

/**
 * Returns FormElements.
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

  /**
   * Given a predicateUri, de-references it,
   * Tries to find the best FormElement,
   * Initiates it and returns the FormElement
   *
   * @param predicateUri
   * @param data
   */
  async create (predicateUri, data): Promise<any> {
    let predicateUriExpanded = predicateUri
    for (const [alias, uri] of Object.entries(this.form.jsonLdContext)) {
      predicateUriExpanded = predicateUriExpanded.replace(alias + ':', uri)
    }
    predicateUriExpanded = predicateUriExpanded.replace('@', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#')

    const predicateMeta = await this.form.predicateMetaResolver.getFieldMeta(predicateUriExpanded)
    const bindingQuad = this.form.formDefinition.length ? this.form.formDefinition.find(quad => quad.predicate.id === 'http://rdf.danielbeeke.nl/form/form-dev.ttl#binding' && quad.object.id === predicateUriExpanded) : []
    const uiQuads = this.form.formDefinition.length ? this.form.formDefinition.filter(quad => quad.subject.id === predicateUriExpanded) : []

    if (bindingQuad?.subject?.id) {
      this.form.formDefinition
        .filter(quad => quad.subject.id === bindingQuad?.subject?.id)
        .forEach(quad => uiQuads.push(quad))
    }
    const uiSettings = {}

    for (const quad of uiQuads) {
      const jsonQuad = quad.toJSON()
      const shortenedPredicate = quad.predicate.id.split('#')[1]
      uiSettings[shortenedPredicate] = jsonQuad.object.value
    }

    const formElementType = this.form.formElementResolverRegistry.resolve(predicateUriExpanded, predicateMeta, uiSettings, data)
    const formElement = this.form.formElementRegistry.get(formElementType, predicateUri, data, predicateMeta, uiSettings)
    await formElement.init()
    return formElement
  }

  /**
   * Used for creating FormElements for all the items in an object.
   *
   * @param data
   * @param pointer
   * @param children
   */
  async handleData (data, pointer, children) {
    for (const [predicate, childData] of Object.entries(data)) {
      pointer[predicate] = await this.form.formElementFactory.create(predicate, childData)
      children.push(predicate)
    }
  }
}
