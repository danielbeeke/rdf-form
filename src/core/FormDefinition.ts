import { ttl2jsonld } from '../vendor/ttl2jsonld'
import { jsonld } from '../vendor/jsonld.js'
import { ExpandedJsonLdObject } from '../types/ExpandedJsonLdObject'
import { lastPart } from '../helpers/lastPart'
import { expand } from '../helpers/expand'
import { CoreComponent } from '../types/CoreComponent'
import { JsonLdProxy } from './JsonLdProxy'
import { Language } from './Language'
import { applyProxy } from '../helpers/applyProxy'

export const only = (...type) => {
  return (item: ExpandedJsonLdObject) => item['@type']?.some(rdfClass => type.includes(lastPart(rdfClass)))
}

export class FormDefinition extends EventTarget implements CoreComponent {

  private formUrl: string
  private sourceDefinitionCompacted: object = {}
  private sourceDefinitionExpanded: Array<any>
  public context = { form: null }
  public ready: boolean = false
  public chain = new Map()
  public chainReferences = new Map()
  private ontology: Array<object> = []
  protected roles: Array<string>
  protected form: any

  constructor (form: any) {
    super()
    this.form = form
    this.formUrl = this.form.getAttribute('form')
    if (!this.formUrl) throw new Error('No data attribute "form" was found on the custom element.')
    this.init()
  }

  async init () {
    const proxy = this.form.getAttribute('proxy') ?? ''
    this.roles = this.form.getAttribute('roles') ? this.form.getAttribute('roles').split(',') : []
    const definitionResponse = await fetch(applyProxy(this.formUrl, proxy))
    const definitionTurtle = await definitionResponse.text()
    this.sourceDefinitionCompacted = ttl2jsonld(definitionTurtle)
    Object.assign(this.context, this.sourceDefinitionCompacted['@context'])
    if (!this.context.form) throw new Error('The prefix form was not found in the form definition.')
    if (!this.sourceDefinitionCompacted['@graph']) throw new Error('Missing fields inside form definition')
    this.sourceDefinitionExpanded = JsonLdProxy(await jsonld.expand(this.sourceDefinitionCompacted), this.context, {
      '_': (value) => Language.multilingualValue(value, 'ui')
    })
    await this.resolveSubForms(this.sourceDefinitionExpanded)
    if (!this.info) throw new Error('The form definition did not define a form itself.')

    /** @ts-ignore */
    const ontologyCompacted = await fetch(applyProxy(this.context.form, proxy)).then(async response => ttl2jsonld(await response.text()))
    Object.assign(this.context, ontologyCompacted['@context'])
    this.ontology = JsonLdProxy(await jsonld.expand(ontologyCompacted), this.context)
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

  get fieldsToRemove () {
    const formRemovals = JSON.parse(this.form.getAttribute('fields-to-remove') ?? '[]')
    return [...(this.info['form:remove']?.map(item => item._) ?? []), ...formRemovals].map(collapsed => expand(collapsed, this.context)) ?? []
  }

  get fields (): Array<any> {
    return this.sourceDefinitionExpanded.filter(only('Field'))
    .filter(field => !this.fieldsToRemove.includes(field['@id']))
  }

  get elements (): Array<any> {
    return this.sourceDefinitionExpanded.filter(only('Field', 'Container', 'UiComponent'))
    .filter(field => !this.fieldsToRemove.includes(field['@id']))
  }

  async resolveSubForms (formDefinition) {
    const proxy = this.form.getAttribute('proxy') ?? ''
    const fields = formDefinition.filter(only('Field'))

    for (const field of fields) {
      const subformUrl = field['form:subform']

      if (subformUrl?.length > 1) throw new Error('Multiple sub forms were found for one field.')
      
      if (subformUrl) {
        const subformResponse = await fetch(applyProxy(subformUrl._, proxy))
        const subformTurtle = await subformResponse.text()
        const subformDefinitionCompacted = ttl2jsonld(subformTurtle)
        const subformDefinitionExpanded = JsonLdProxy(await jsonld.expand(subformDefinitionCompacted), subformDefinitionCompacted['@context'], {
          '_': (value) => Language.multilingualValue(value, 'ui')
        });

        await this.resolveSubForms(subformDefinitionExpanded)

        Object.assign(this.context, subformDefinitionCompacted['@context'])

        // Some properties may be inherit from the parent, such as container and order.
        for (const subFormfield of subformDefinitionExpanded) {
          if (field['form:container']) {
              subFormfield['form:container'] = field['form:container'].$
          }
  
          if (field['form:order']?._) {
            subFormfield['form:order'] = [{ '@value': (field['form:order']?._ ?? 0) + parseFloat('0.' + subFormfield['form:order']?._)}]
          }
        }
  
        const fieldIndex = formDefinition.map(field => field.$).indexOf(field.$)
        formDefinition.$.splice(fieldIndex, 1, ...subformDefinitionExpanded.map(field => field.$))
      }
    }

    return formDefinition
  }

  applyFieldAccessRoles (fields: Array<any>) {
    return fields.filter(field => {
      if (field['form:access']) {
        return this.roles.some(userRole => field['form:access'].map(role => role['@id']).includes(userRole))
      }
      return true
    })
  }

  createChain () {
    const recursiveChainCreator = (fields) => {
      const chain = new Map()

      fields.sort((a, b) => (a['form:order']?._ ?? 0) - (b['form:order']?._ ?? 0))

      for (const field of fields) {
        const fieldBindings = this.getBindingsOfField(field)
        let children = []
        if (field['form:widget']?._ === 'group' || lastPart(field['@type'][0]) === 'Container') {
          const nestingType = field['form:widget']?._ === 'group' ? 'group' : 'container'
          /** @ts-ignore */
          children = this.applyFieldAccessRoles(this.elements.filter(innerField => innerField?.[`form:${nestingType}`]?._ === lastPart(field['@id'])))
        }

        chain.set(fieldBindings.length ? fieldBindings : field.$, [field, recursiveChainCreator(children)])
      }

      return chain
    }

    const firstLevelFields = this.applyFieldAccessRoles(this.elements.filter(field => !field['form:group'] && !field['form:container']))
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