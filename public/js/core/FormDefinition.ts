import { ttl2jsonld } from '../vendor/ttl2jsonld'
import { jsonld as JsonLdProcessor } from '../vendor/jsonld.js'
import { ExpandedJsonLdObject } from '../types/ExpandedJsonLdObject'
import { lastPart } from '../helpers/lastPart'
import { CoreComponent } from '../types/CoreComponent'

export class FormDefinition extends EventTarget implements CoreComponent {

  private formUrl: string
  private sourceDefinitionCompacted: object = {}
  private sourceDefinitionExpanded: Array<any>
  private resolvedFormDefinition: object = {}
  private context = { form: null }
  public ready: boolean = false

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
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  get prefix () {
    return this.context.form
  }

  get info () {
    return this.sourceDefinitionExpanded.find((item: ExpandedJsonLdObject) => item['@type'].some(rdfClass => lastPart(rdfClass) === 'Form'))
  }

  get fields () {
    return this.resolvedFormDefinition
  }

  async resolveSubForms () {
    const resolvedFormDefinition = JSON.parse(JSON.stringify(this.sourceDefinitionExpanded))
    const fields = resolvedFormDefinition.filter((item: ExpandedJsonLdObject) => item['@type'].some(rdfClass => lastPart(rdfClass) === 'Field'))

    for (const field of fields) {
      const subformUrl = <Array<{'@id': string}>> field[`${this.prefix}subform`]
      if (subformUrl?.length > 1) throw new Error('Multiple sub forms were found for one field.')
      
      if (subformUrl) {
        const subformResponse = await fetch(subformUrl[0]['@id'])
        const subformTurtle = await subformResponse.text()
        const subformDefinitionCompacted = ttl2jsonld(subformTurtle)
        const subformPrefix = subformDefinitionCompacted['@context'].form
        const subformDefinitionExpanded = await JsonLdProcessor.expand(subformDefinitionCompacted);
        const subFormfields = subformDefinitionExpanded.filter((item: ExpandedJsonLdObject) => item['@type'].some(rdfClass => lastPart(rdfClass) === 'Field'))

        Object.assign(this.context, subformDefinitionCompacted['@context'])

        // Some properties may be inherit from the parent, such as container and order.
        for (const subFormfield of subFormfields) {
            if (field[`${this.prefix}container`]) {
              subFormfield[`${subformPrefix}container`] = field[`${this.prefix}container`][0]['@value']
          }
  
          if (field[`${this.prefix}order`]) {
            subFormfield[`${subformPrefix}order`] = field[`${this.prefix}order`][0]['@value'] + parseFloat('0.' + subFormfield[`${subformPrefix}order`])
          }
        }
  
        const fieldIndex = resolvedFormDefinition.indexOf(field)
        resolvedFormDefinition.splice(fieldIndex, 1, ...subFormfields)
      }
    }

    return resolvedFormDefinition
  }
}