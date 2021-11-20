import { ElementBase } from './ElementBase'
import OAuth from 'oauth-1.0a'
import hmacSHA1 from 'crypto-js/hmac-sha1';
import Base64 from 'crypto-js/enc-base64';
import { html } from 'uhtml/async'
import { attributesDiff } from '../helpers/attributesDiff'
import { debounce } from '../helpers/debounce'
import { lastPart } from '../helpers/lastPart'

const auth = { key: 'c04fa9a3a9044839b68a57c58c3d5c62', secret: '52a6049a33e44f8a9614ec39e2015c13' }

const oauth = OAuth({
  consumer: auth,
  signature_method: 'HMAC-SHA1',
  hash_function: (base_string, key) => hmacSHA1(base_string, key).toString(Base64),
})

const get = async (path, proxy) => {
  const request = { url: 'https://api.thenounproject.com' + path, method: 'GET' }
  const authorizedRequest = oauth.authorize(request)
  const response = await fetch(proxy + request.url, { headers: oauth.toHeader(authorizedRequest) })
  if (response.status === 404) return { icons: [] }
  return await response.json()
}

export class Noun extends ElementBase {

  private searchTerm: string = ''
  private debouncedSearch: any
  private previewIcons: Array<any> = []

  constructor (...args) {
    super(...args)
    this.debouncedSearch = debounce(async (search) => {
      if (!search) return
      const { icons } = await get(`/icons/${search}`, this.proxy)
      this.previewIcons = icons
      this.render()
    }, 1000)
  }

  input () {
    const selectIcon = (icon) => {
      this.value[`@id`] = `https://thenounproject.com/icon/${icon.id}`
      this.previewIcons = []
      this.searchTerm = null
      this.render()
    }
    
    return html`
      <input 
        ref=${attributesDiff(this.attributes)} 
        .value=${this.value?._ ?? this.searchTerm ?? ''} 
        onchange=${(event) => this.on(event)}
        onkeyup=${(event) => this.on(event)}
      />

      ${this.value?._ ? html`<img src=${`https://static.thenounproject.com/png/${lastPart(this.value?._)}-84.png`}>` : null}

      ${this.previewIcons.length ? html`
        ${this.previewIcons.map(icon => html`
          <img title=${icon.attribution} src=${icon.preview_url_84} onclick=${() => selectIcon(icon)} />
        `)}
      ` : html``}
    `
  }

  async on (event) {
    if (['keyup', 'change'].includes(event.type)) {
      if (!this.value) await this.addItem()
      this.searchTerm = event.target.value
      this.debouncedSearch(this.searchTerm)
    }
  }

}