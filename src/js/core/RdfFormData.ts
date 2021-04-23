import { CoreComponent } from '../types/CoreComponent'
import { ttl2jsonld } from '../vendor/ttl2jsonld'
import { jsonld as JsonLdProcessor } from '../vendor/jsonld.js'
import { JsonLdProxy } from './JsonLdProxy'
import { Language } from './Language'
import { isFetchable } from '../helpers/isFetchable'

export class RdfFormData extends EventTarget implements CoreComponent {

  public ready: boolean = false
  private dataAsTextOrUrl: string
  private sourceData: any
  public get: () => any
  public proxy = { $: null }
  private sourceDataCompacted: object

  constructor (dataAsTextOrUrl: string = null) {
    super()
    this.dataAsTextOrUrl = dataAsTextOrUrl
    this.init()
  }

  async init () {
    let dataText
    if (!this.dataAsTextOrUrl) this.sourceData = []

    if (isFetchable(this.dataAsTextOrUrl)) {
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

    this.createProxy()
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  get context () {
    return this.sourceDataCompacted['@context']
  }

  createProxy () {
    this.proxy = JsonLdProxy(this.sourceData, this.context, {
      '_': (value) => Language.multilingualValue(value, 'l10n')
    })
  }
}