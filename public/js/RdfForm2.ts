import { FormDefinition } from './core/FormDefinition'
import { RdfFormData } from './core/RdfFormData'
import { CoreComponent } from './types/CoreComponent'
import { Field } from './types/Field'
import { FieldInstance } from './types/FieldInstance'
import { expandProxiesInConsole } from './core/Debug'
import { render, html } from 'https://unpkg.com/uhtml/async?module';


class RdfForm2 extends HTMLElement implements CoreComponent {
  private formDefinition: FormDefinition
  private formData: RdfFormData
  private data: any
  public ready: boolean = false
  private fieldInstances: WeakMap<object, FieldInstance>

  constructor () {
    super()
    this.formDefinition = new FormDefinition(this.getAttribute('form'))
    this.formData = new RdfFormData(this.getAttribute('data'))

    if (this.getAttribute('debug') !== null) expandProxiesInConsole()

    const components = [
      this.formDefinition,
      this.formData
    ]

    for (const component of components) {
      component.addEventListener('ready', () => {
        if (components.every(component => component.ready) && !this.ready) {
          this.data = this.formData.createProxy()

          this.ready = true
          this.render()
        }
      })
    }
  }

  render () {
    for (const [bindings, children] of this.formDefinition.chain.entries()) {
      console.log(bindings[0])
      console.log(this.data[bindings[0]])  
    }
    // console.log(this.formData.sourceData)
    // console.log(this.data['recipe:ingredients'])
    // console.log(this.data['recipe:ingredients'][0])
    // console.log(this.data['recipe:ingredients'][0]['recipe:ingredient'])
    // console.log(this.data['recipe:ingredients'][3]['recipe:ingredient'])
  }

}

customElements.define('rdf-form2', RdfForm2);
