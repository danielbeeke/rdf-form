import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'
import { lastPart } from '../helpers/lastPart'
import { attributesDiff } from '../helpers/attributesDiff'
import { t } from '../core/Language'

let token = localStorage.b2Token ?? ''
let apiDomain = localStorage.b2ApiDomain ?? ''
const proxy = location.protocol + '//' + location.hostname + ':' + 8071

const inputs = new Map()

export class B2 extends ElementBase {

  constructor (...args) {
    super(...args)
    this.attributes.type = 'file'
    this.attributes.accept = this.definition['form:extentions'].map(item => item._).join(',')
  }

  async upload (event: Event) {

    const files = inputs.get(this).files
    console.log(files)

    for (const file of files) {
      const { authorizationToken, uploadUrl, bucketId } = await this.callApi('b2_get_upload_url', 'POST', {
        bucketId: '28e1a342b71d8c047bc40f1a',
      })
  
      const uploadResponse = await fetch(`${proxy}/${uploadUrl}`, {
        method: 'POST',
        headers: {
          'Authorization': authorizationToken,
          'X-Bz-File-Name': encodeURI(file.name),
          'Content-Type': 'b2/x-auto',
          'Content-Length': file.size,
          'X-Bz-Content-Sha1': 'do_not_verify'
        }
      })
      const uploadedFile = await uploadResponse.json()
      console.log(uploadedFile)
    }

  }

  async getToken () {
    const response = await fetch(`${proxy}/api.backblazeb2.com/b2api/v2/b2_authorize_account`)
    const json = await response.json()
    token = json.authorizationToken
    apiDomain = json.apiUrl

    localStorage.b2Token = token
    localStorage.b2ApiDomain = json.apiUrl
  }

  /**
   * Used for calls to the B2 API.
   * 
   * @param endpoint 
   * @param method 
   * @param data 
   * @returns 
   */
  async callApi (endpoint: string, method: string = 'GET', data: {} = {}) {
    if (!token) await this.getToken()

    const options: any = {
      method,
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }
    
    if (Object.keys(data).length) options.body = JSON.stringify(data)
    const response = await fetch(`${proxy}/${apiDomain}/b2api/v2/${endpoint}`, options)

    const json = await response.json()
    return json
  }

  /**
   * Checks if a given file name exists.
   * You should also give the prefixed folder in the string because the check in backblaze is a startsWith.
   */
  async existsInBucket (url: string) {
    const parsedUrl = new URL(url)

    const list = await this.callApi('b2_list_file_names', 'POST', {
      bucketId: '28e1a342b71d8c047bc40f1a',
      prefix: parsedUrl.pathname.substr(1),
      maxFileCount: 1
    })

    return !!list.files?.[0]
  }

  /**
   * Main input template.
   */
  async input () {
    const initialValue = this.value?._

    return html`

      ${initialValue ? this.valueDisplay() : html`
      <input 
        ref=${(node) => {
          inputs.set(this, node)
          attributesDiff(this.attributes)(node)
        }} 
        onchange=${(event) => this.on(event)}
        onkeyup=${(event) => this.on(event)}
      />
      <button type="button" onclick=${this.upload.bind(this)} class="button primary upload">${t`Upload`}</button>
      `}
    `
  }

  /**
   * Used for displaying the field in display mode.
   */
   async valueDisplay () {
    const fileExistsInBucket = await this.existsInBucket(this.value?._)
    return html`<a class=${fileExistsInBucket ? 'existing' : 'not-existing' } target="_blank" href=${this.value?._}>${lastPart(this.value?._)}</a>`
  }
}