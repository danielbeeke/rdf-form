import { CoreComponent } from '../types/CoreComponent'
import { ElementInstance } from '../types/ElementInstance'
import { RdfForm } from '..'

export class Registry extends EventTarget implements CoreComponent {

  public ready: boolean = false
  private registeredFieldClasses = {}
  private form: RdfForm

  constructor (rdfForm: RdfForm) {
    super()
    this.form = rdfForm
    this.init()
  }

  async init () {
    const event = new CustomEvent('register-elements', { detail: { fields: [] } })
    this.form.dispatchEvent(event)
    Object.assign(this.registeredFieldClasses, event.detail.fields)
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  async setupElement (definition, bindings: Array<string>, value = null, itemValues = {}, parentValues = null, render: any = () => null, parent, index: number | null = null, children = []): Promise<ElementInstance> {
    const widget = definition['form:widget']?._ && this.registeredFieldClasses[definition['form:widget']?._] ? definition['form:widget']._ : 'unknown'
    let elementClass = this.registeredFieldClasses[widget]
    
    if (!elementClass) {
      console.log(this.registeredFieldClasses)
      throw new Error('Unknown widget type: ' + definition['form:widget']?._)
    }
    return new elementClass(definition, bindings, value, itemValues, parentValues, render, parent, index, children)
  }
}