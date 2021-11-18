import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'
import { lastPart } from '../helpers/lastPart'
import { attributesDiff } from '../helpers/attributesDiff'
import { t } from '../core/Language'

let token
let apiDomain

export class B2 extends ElementBase {

  constructor (...args) {
    super(...args)
    this.attributes.type = 'file'
    this.attributes.accept = this.definition['form:extentions'].map(item => item._).join(',')
  }

  /**
   * Used for displaying the field in display mode.
   */
  valueDisplay () {
    return html`<a target="_blank" href=${this.value?._}>${lastPart(this.value?._)}</a>`
  }

  upload (event: Event) {

  }

  async callApi (endpoint: string, method: string = 'GET', data: {} = {}) {
    const proxy = location.protocol + '//' + location.hostname + ':' + location.port

    if (!token) {
      const response = await fetch(`${proxy}/api.backblazeb2.com/b2api/v2/b2_authorize_account`)
      const json = await response.json()
      token = json.authorizationToken
      apiDomain = json.apiUrl
    }

    const options: any = {
      method,
      headers: {
        'Authorization': token
      }
    }
    
    if (Object.keys(data).length) options.body = JSON.stringify(data)
    

    const response = await fetch(`${proxy}/${apiDomain.replace('https://', '')}/b2api/v2/${endpoint}`, options)

    const json = await response.json()
    return json
  }

  async existsInBucket (url: string) {
    const list = await this.callApi('b2_list_file_names', 'POST', {
      prefix: url,

    })

    console.log(list)
  }

  input () {
    const initialValue = this.value?._

    this.existsInBucket(initialValue)

    return html`

      ${initialValue ? this.valueDisplay() : html`
      <input 
        ref=${attributesDiff(this.attributes)} 
        .value="" 
        onchange=${(event) => this.on(event)}
        onkeyup=${(event) => this.on(event)}
      />
      <button type="button" onclick=${this.upload.bind(this)} class="button primary upload">${t`Upload`}</button>
      `}
    `
  }
}