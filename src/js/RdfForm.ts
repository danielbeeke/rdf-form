import { FormDefinition } from './core/FormDefinition'
import { RdfFormData } from './core/RdfFormData'
import { Registry } from './core/Registry'
import { Renderer } from './core/Renderer'
import { Language, LanguageService } from './core/Language'
import { CoreComponent } from './types/CoreComponent'
import { kebabize } from './helpers/kebabize'
import { expandProxiesInConsole } from './core/Debug'
export { JsonLdProxy } from './core/JsonLdProxy'
export { languages } from './languages.js'
export { ElementBase } from './elements/ElementBase'

export class RdfForm extends HTMLElement implements CoreComponent {
  public formDefinition: FormDefinition
  public formData: RdfFormData
  public registry: Registry
  public renderer: Renderer
  private language: LanguageService
  public ready: boolean = false
  public shadow: any
  public proxy: string = null
  
  constructor () {
    super()

    const fields = [
      'Group', 
      'Container', 
      'String',
      'Number',
      'Details',
      'UrlImage',
      'Wrapper',
      'Reference',
      'Dropdown',
      'Checkbox',
      'Color',
      'Mail',
      'Url',
      'UrlUppy',
      'Date',
      'Textarea',
      'Password',
      'WYSIWYG',
      'LanguagePicker',
      'Unknown',
    ]

    const fieldsObject = {}

    for (const field of fields) {
      const name = kebabize(field.replace(/[^a-zA-Z0-9]+/g, ''))
      fieldsObject[name] = '../elements/' + field
    }

    this.addEventListener('register-elements', (event: CustomEvent) => {
      event.detail.fields = {...event.detail.fields, ...fieldsObject}
    })
  }

  connectedCallback () {
    if (this.shadow) return
    this.shadow = this.attachShadow({ mode: 'open' })
    this.formDefinition = new FormDefinition(this)
    this.formData = new RdfFormData(this)
    this.registry = new Registry(this)
    this.renderer = new Renderer(this)
    this.language = Language
    this.language.init(this)
    this.language.addEventListener('l10n-change', (event: CustomEvent) => this.dispatchEvent(new CustomEvent('l10n-change', {
      detail: event.detail
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
          this.dispatchEvent(new CustomEvent('ready'))
        }
      })
    }
  }
}

customElements.define('rdf-form', RdfForm);
