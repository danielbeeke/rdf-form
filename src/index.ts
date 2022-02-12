import { FormDefinition } from './core/FormDefinition'
import { RdfFormData } from './core/RdfFormData'
import { Registry } from './core/Registry'
import { Renderer } from './core/Renderer'
import { Language, LanguageService, t } from './core/Language'
import { CoreComponent } from './types/CoreComponent'
import { expandProxiesInConsole } from './core/Debug'
export { JsonLdProxy } from './core/JsonLdProxy'
export { languages } from './languages.js'
export { ElementBase } from './elements/ElementBase'

let fields: any
export const init = (givenFields: { [key: string]: any } | null = null) => {
  fields = givenFields
}

export class RdfForm extends HTMLElement implements CoreComponent {
  public language: LanguageService
  public formDefinition: FormDefinition
  public formData: RdfFormData
  public registry: Registry
  public renderer: Renderer
  public proxy: string | null
  public ready: boolean = false
  public shadow: any
  public t: any
  
  constructor () {
    super()
    this.addEventListener('register-elements', (event: Event) => (event as CustomEvent).detail.fields = fields)
  }

  async connectedCallback () {
    if (this.shadow) return
    this.shadow = this.attachShadow({ mode: 'open' })
    this.formDefinition = new FormDefinition(this)
    this.formData = new RdfFormData(this)
    this.registry = new Registry(this)
    this.renderer = new Renderer(this)
    this.language = Language
    await this.language.init(this)
    this.t = t
    this.language.addEventListener('l10n-change', (event: Event) => this.dispatchEvent(new CustomEvent('l10n-change', {
      detail: (event as CustomEvent).detail
    })))
    this.proxy = this.getAttribute('proxy')

    if (this.getAttribute('debug') !== null) expandProxiesInConsole()

    const components = [
      this.formDefinition,
      this.formData,
      this.registry,
      this.language,
      this.renderer
    ]

    for (const component of components) {
      component.addEventListener('ready', () => {
        if (components.every(component => component.ready) && !this.ready) {
          this.ready = true
          this.renderer.render()
          this.dispatchEvent(new CustomEvent('ready', {
            detail: {
              proxy: this.formData.proxy,
              expanded: this.formData.proxy.$,
            }
          }))
        }
      })
    }
  }
}

customElements.define('rdf-form', RdfForm);
