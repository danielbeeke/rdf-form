import { CoreComponent } from '../types/CoreComponent'
import { kebabize } from '../helpers/kebabize'
import { ElementInstance } from '../types/ElementInstance'

export class Registry extends EventTarget implements CoreComponent {

  public ready: boolean = false
  private fieldClasses = new Map()

  constructor () {
    super()
    this.addEventListener('listening', (event: CustomEvent) => event.detail.fields.push(...[
      './Group', 
      './String',
      './Number',
      './Details',
      './UrlImage',
      './Wrapper',
      './Reference',
      './Dropdown',
      './Checkbox',
      './LanguagePicker',
      './Unknown',
    ]))
    this.init()
  }

  async init () {
    const event = new CustomEvent('listening', { detail: { fields: [] } })
    this.dispatchEvent(event)
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

  setupElement (definition, bindings: Array<string>, value = null, parentValues = null, index = 0, render = () => null, comunica: any, parent): ElementInstance {
    const widget = this.fieldClasses.has(definition['form:widget']._) ? definition['form:widget']._ : 'unknown'
    const elementClass = this.fieldClasses.get(widget)
    return new elementClass(definition, bindings, value, parentValues, index, render, comunica, parent)
  }
}