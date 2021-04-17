import { FormDefinition } from './core/FormDefinition'
import { RdfFormData } from './core/RdfFormData'
import { Registry } from './core/Registry'
import { Renderer } from './core/Renderer'
import { Language, LanguageService } from './core/Language'
import { CoreComponent } from './types/CoreComponent'
import { expandProxiesInConsole } from './core/Debug'

class RdfForm2 extends HTMLElement implements CoreComponent {
  private formDefinition: FormDefinition
  private formData: RdfFormData
  private registry: Registry
  private renderer: Renderer
  private language: LanguageService
  public ready: boolean = false

  constructor () {
    super()
    this.formDefinition = new FormDefinition(this.getAttribute('form'))
    this.formData = new RdfFormData(this.getAttribute('data'))
    this.registry = new Registry()
    this.renderer = new Renderer()
    this.language = Language

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
          this.render()
        }
      })
    }
  }

  render () {
    this.renderer.render(
      this.formDefinition,
      this.registry,
      this.formData.proxy,
      this
    )
  }

}

customElements.define('rdf-form2', RdfForm2);
