import { FormDefinition } from './core/FormDefinition'
import { RdfFormData } from './core/RdfFormData'
import { CoreComponent } from './types/CoreComponent'
import { render, html } from 'https://unpkg.com/uhtml/async?module';

class RdfForm2 extends HTMLElement implements CoreComponent {
  private formDefinition: FormDefinition
  private data: RdfFormData
  public ready: boolean = false

  constructor () {
    super()
    this.formDefinition = new FormDefinition(this.getAttribute('form'))
    this.data = new RdfFormData(this.getAttribute('data'))

    const components = [
      this.formDefinition,
      this.data
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
    console.log(this)
  }

}

customElements.define('rdf-form2', RdfForm2);
