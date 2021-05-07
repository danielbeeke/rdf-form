import { CoreComponent } from '../types/CoreComponent'
import { kebabize } from '../helpers/kebabize'
import { ElementInstance } from '../types/ElementInstance'
import { RdfForm } from '../RdfForm'

export class Registry extends EventTarget implements CoreComponent {

  public ready: boolean = false
  private fieldClasses = new Map()
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
    const { fields } = event.detail

    this.registeredFieldClasses = fields

    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  async setupElement (definition, bindings: Array<string>, value = null, itemValues = {}, parentValues = null, render = () => null, parent, index = null, children = []): Promise<ElementInstance> {
    const widget = definition['form:widget']?._ && this.registeredFieldClasses[definition['form:widget']?._] ? definition['form:widget']._ : 'unknown'
    let elementClass = this.fieldClasses.get(widget)
    
    if (!elementClass) {
      const widgetPath = this.registeredFieldClasses[definition['form:widget']?._]
      await import(`${widgetPath}.js`).then(fieldClass => {
        const name = Object.keys(fieldClass)[0]
        this.fieldClasses.set(widget, fieldClass[name])
        elementClass = this.fieldClasses.get(widget)
      })
    }

    if (elementClass) {
      return new elementClass(definition, bindings, value, itemValues, parentValues, render, parent, index, children)
    }
  }
}