import { ttl2jsonld } from '../vendor/ttl2jsonld'
import { jsonld as JsonLdProcessor } from '../vendor/jsonld.js'
import { ExpandedJsonLdObject } from '../types/ExpandedJsonLdObject'
import { lastPart } from '../helpers/lastPart'
import { CoreComponent } from '../types/CoreComponent'
import { JsonLdProxy } from './JsonLdProxy'

export const only = (...type) => {
  return (item: ExpandedJsonLdObject) => item['@type'].some(rdfClass => type.includes(lastPart(rdfClass)))
}

export class FormDefinition extends EventTarget implements CoreComponent {

  private formUrl: string
  private sourceDefinitionCompacted: object = {}
  private sourceDefinitionExpanded: Array<any>
  private resolvedFormDefinition: Array<any>
  private context = { form: null }
  public ready: boolean = false
  public chain = new Map()
  public chainReferences = new Map()
  private ontology: Array<object> = []

  constructor (formUrl: string) {
    super()
    this.formUrl = formUrl
    if (!formUrl) throw new Error('No data attribute "form" was found on the custom element.')
    this.init()
  }

  async init () {
    const definitionResponse = await fetch(this.formUrl)
    const definitionTurtle = await definitionResponse.text()
    this.sourceDefinitionCompacted = ttl2jsonld(definitionTurtle)
    Object.assign(this.context, this.sourceDefinitionCompacted['@context'])
    if (!this.context.form) throw new Error('The prefix form was not found in the form definition.')
    if (!this.sourceDefinitionCompacted['@graph']) throw new Error('Missing fields inside form definition')
    this.sourceDefinitionExpanded = await JsonLdProcessor.expand(this.sourceDefinitionCompacted);
    if (!this.info) throw new Error('The form definition did not define a form itself.')
    this.resolvedFormDefinition = await this.resolveSubForms()
    const ontologyCompacted = await fetch(this.context.form).then(async response => ttl2jsonld(await response.text()))
    Object.assign(this.context, ontologyCompacted['@context'])
    this.ontology = JsonLdProxy(await JsonLdProcessor.expand(ontologyCompacted), this.context)
    this.chain = this.createChain()
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  get prefix () {
    return this.context.form
  }

  get info () {
    return this.sourceDefinitionExpanded.find(only('Form'))
  }

  get fields (): Array<any> {
    return this.resolvedFormDefinition.filter(only('Field'))
  }

  get elements (): Array<any> {
    return this.resolvedFormDefinition.filter(only('Field', 'Container', 'UiComponent'))
  }

  async resolveSubForms () {
    const resolvedFormDefinition = JsonLdProxy(JSON.parse(JSON.stringify(this.sourceDefinitionExpanded)), this.context)
    const fields = resolvedFormDefinition.filter(only('Field'))

    for (const field of fields) {
      const subformUrl = <Array<{'@id': string}>> field['form:subform']

      if (subformUrl?.length > 1) throw new Error('Multiple sub forms were found for one field.')
      
      if (subformUrl) {
        const subformResponse = await fetch(subformUrl[0]['@id'])
        const subformTurtle = await subformResponse.text()
        const subformDefinitionCompacted = ttl2jsonld(subformTurtle)
        const subformDefinitionExpanded = JsonLdProxy(await JsonLdProcessor.expand(subformDefinitionCompacted), subformDefinitionCompacted['@context']);
        const subFormfields = subformDefinitionExpanded.filter(only('Field'))

        Object.assign(this.context, subformDefinitionCompacted['@context'])

        // Some properties may be inherit from the parent, such as container and order.
        for (const subFormfield of subFormfields) {
            if (field['form:container']) {
              subFormfield['form:container'] = field['form:container'].$
          }
  
          if (field['form:order']) {
            subFormfield['form:order'] = [{ '@value': field['form:order']._ + parseFloat('0.' + subFormfield['form:order']._)}]
          }
        }
  
        const fieldIndex = resolvedFormDefinition.map(field => field.$).indexOf(field.$)
        resolvedFormDefinition.$.splice(fieldIndex, 1, ...subFormfields.map(field => field.$))
      }
    }

    return resolvedFormDefinition
  }

  createChain () {
    const recursiveChainCreator = (fields) => {
      const chain = new Map()

      fields.sort((a, b) => a['form:order']?._ ?? 0 - b['form:order']?._ ?? 0)

      for (const field of fields) {
        const fieldBindings = this.getBindingsOfField(field)
        let children = []
        if (field['form:widget']?._ === 'group' || lastPart(field['@type'][0]) === 'Container') {
          const nestingType = field['form:widget']?._ === 'group' ? 'group' : 'container'
          children = this.elements.filter(innerField => innerField?.[`form:${nestingType}`]?._ === lastPart(field['@id']))
        }

        chain.set(fieldBindings.length ? fieldBindings : field.$, [field, recursiveChainCreator(children)])
      }

      return chain
    }

    const firstLevelFields = this.elements.filter(field => !field['form:group'] && !field['form:container'])
    return recursiveChainCreator(firstLevelFields)
  }

  getBindingsOfField (field: object) {
    const bindings = []
    // Goes through all the fields properties, check which items have bindings.
    for (const [fieldProperty, propertySetting] of Object.entries(field)) {
      const fieldMetaProperties = this.ontology.find(predicate => lastPart(predicate?.['@id']) === lastPart(fieldProperty))
      if (fieldMetaProperties && fieldMetaProperties['form:isBindingProperty'] && Array.isArray(propertySetting)) {
        /* @ts-ignore */
        bindings.push(...propertySetting.$.flatMap(item => item['@id']))
      }
    }
    return bindings
  }
}