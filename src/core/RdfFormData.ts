import { CoreComponent } from '../types/CoreComponent'
import { ttl2jsonld } from '../vendor/ttl2jsonld'
import { jsonld as JsonLdProcessor } from '../vendor/jsonld.js'
import { JsonLdProxy } from './JsonLdProxy'
import { Language } from './Language'
import { isFetchable } from '../helpers/isFetchable'
import { FormDefinition } from './FormDefinition'
import { RdfForm } from '..'

export class RdfFormData extends EventTarget implements CoreComponent {

  public ready: boolean = false
  private dataAsTextOrUrl: string
  private sourceData: any
  public get: () => any
  public proxy = { $: null }
  protected formDefinition: FormDefinition
  private sourceDataCompacted: object
  protected form: RdfForm

  constructor (form: RdfForm) {
    super()
    this.form = form
    this.formDefinition = this.form.formDefinition
    this.dataAsTextOrUrl = this.form.getAttribute('data')

    this.formDefinition.addEventListener('ready', () => this.init())
  }

  async init () {
    let dataText
    if (!this.dataAsTextOrUrl) this.sourceData = []

    if (this.dataAsTextOrUrl && isFetchable(this.dataAsTextOrUrl)) {
      const dataResponse = await fetch(this.dataAsTextOrUrl)
      dataText = await dataResponse.text()
    }
    else {
      dataText = this.dataAsTextOrUrl
    }

    try {
      this.sourceDataCompacted = JSON.parse(dataText)
    }
    catch (e) {
      this.sourceDataCompacted = ttl2jsonld(dataText)
    }

    this.sourceData = await JsonLdProcessor.expand(this.sourceDataCompacted);

    if (Array.isArray(this.sourceData)) this.sourceData = this.sourceData.pop()


    // The new empty object.
    if (!this.sourceData) this.sourceData = {}
    if (!this.sourceData?.['@type']) this.sourceData['@type'] = this.formDefinition.info['form:binding'].map(rdfClass => rdfClass['@id'])

    this.createProxy()
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  get context () {
    return Object.assign({}, this.formDefinition.context, this.sourceDataCompacted?.['@context'])
  }

  createProxy () {
    const context = this.context
    this.proxy = JsonLdProxy(this.sourceData, context, {
      '_': (value) => Language.multilingualValue(value, 'l10n')
    })
  }
}