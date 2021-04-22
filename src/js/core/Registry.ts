import { CoreComponent } from '../types/CoreComponent'
import { kebabize } from '../helpers/kebabize'
import { ElementInstance } from '../types/ElementInstance'
import { RdfForm } from '../RdfForm'

export class Registry extends EventTarget implements CoreComponent {

  public ready: boolean = false
  private fieldClasses = new Map()
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

    // Relative fields may be noted with './'. In fact they are in a different folder but this looks better I think.
    for (let [index, field] of fields.entries()) {
      if (field.substr(0, 2) === './') {
        fields[index] = field.replace('./', '../elements/')
      }
    }

    const promises = fields.map(fieldPath => import(`${fieldPath}.js`).then(fieldClass => {
      const name = Object.keys(fieldClass)[0]
      this.fieldClasses.set(kebabize(name), fieldClass[name])
    }))

    await Promise.all(promises)

    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  setupElement (definition, bindings: Array<string>, value = null, parentValues = null, render = () => null, parent): ElementInstance {
    const widget = this.fieldClasses.has(definition['form:widget']._) ? definition['form:widget']._ : 'unknown'
    const elementClass = this.fieldClasses.get(widget)
    return new elementClass(definition, bindings, value, parentValues, render, parent)
  }
}