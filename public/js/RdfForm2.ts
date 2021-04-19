import { FormDefinition } from './core/FormDefinition'
import { RdfFormData } from './core/RdfFormData'
import { Registry } from './core/Registry'
import { Renderer } from './core/Renderer'
import { Language, LanguageService } from './core/Language'
import { CoreComponent } from './types/CoreComponent'
import { expandProxiesInConsole } from './core/Debug'
import { Comunica } from './vendor/comunica-browser.js'

export class RdfForm2 extends HTMLElement implements CoreComponent {
  public formDefinition: FormDefinition
  public formData: RdfFormData
  public registry: Registry
  private renderer: Renderer
  private language: LanguageService
  public ready: boolean = false
  public shadow: any
  public comunica: any

  connectedCallback () {
    this.shadow = this.attachShadow({ mode: 'open' })
    this.formDefinition = new FormDefinition(this.getAttribute('form'))
    this.formData = new RdfFormData(this.getAttribute('data'))
    this.registry = new Registry()
    this.renderer = new Renderer(this)
    this.language = Language
    this.comunica = Comunica.newEngine()
    this.comunica.httpProxyHandler = this.getAttribute('proxy')

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
        }
      })
    }
  }
}

customElements.define('rdf-form2', RdfForm2);
