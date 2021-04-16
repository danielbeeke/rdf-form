import { CoreComponent } from '../types/CoreComponent'
import { ttl2jsonld } from '../vendor/ttl2jsonld'
import { jsonld as JsonLdProcessor } from '../vendor/jsonld.js'

export class RdfFormData extends EventTarget implements CoreComponent {

  public ready: boolean = false
  private dataAsTextOrUrl: string
  private sourceData: any

  constructor (dataAsTextOrUrl: string = null) {
    super()
    this.dataAsTextOrUrl = dataAsTextOrUrl
    this.init()
  }

  async init () {
    let dataText
    if (!this.dataAsTextOrUrl) {
      this.sourceData = []
    }

    if (this.dataAsTextOrUrl.startsWith('http') || this.dataAsTextOrUrl.startsWith('blob') || this.dataAsTextOrUrl.substr(0, 1) === '/') {
      const dataResponse = await fetch(this.dataAsTextOrUrl)
      dataText = await dataResponse.text()
    }
    else {
      dataText = this.dataAsTextOrUrl
    }

    try {
      this.sourceData = JSON.parse(dataText)
    }
    catch (e) {
      const sourceDataCompacted = ttl2jsonld(dataText)
      this.sourceData = await JsonLdProcessor.expand(sourceDataCompacted);        
    }

    if (Array.isArray(this.sourceData)) this.sourceData = this.sourceData.pop()

    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }
}