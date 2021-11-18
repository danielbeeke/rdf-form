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
    const { fields } = await event.detail

    this.registeredFieldClasses = fields

    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  async setupElement (definition, bindings: Array<string>, value = null, itemValues = {}, parentValues = null, render = () => null, parent, index = null, children = []): Promise<ElementInstance> {
    const widget = definition['form:widget']?._ && this.registeredFieldClasses[definition['form:widget']?._] ? definition['form:widget']._ : 'unknown'
    let elementClass = this.fieldClasses.get(widget)

    if (!elementClass) {
      const widgetPath = this.registeredFieldClasses[definition['form:widget']?._]

      /**
       * @see https://github.com/evanw/esbuild/issues/700
       */
      const fields = {
        '../elements/Group': () => import('../elements/Group.js'), 
        '../elements/Container': () => import('../elements/Container.js'), 
        '../elements/String': () => import('../elements/String.js'), 
        '../elements/Number': () => import('../elements/Number.js'), 
        '../elements/Details': () => import('../elements/Details.js'), 
        '../elements/UrlImage': () => import('../elements/UrlImage.js'), 
        '../elements/Wrapper': () => import('../elements/Wrapper.js'), 
        '../elements/Reference': () => import('../elements/Reference.js'), 
        '../elements/Dropdown': () => import('../elements/Dropdown.js'), 
        '../elements/Checkbox': () => import('../elements/Checkbox.js'), 
        '../elements/Color': () => import('../elements/Color.js'), 
        '../elements/Mail': () => import('../elements/Mail.js'), 
        '../elements/Url': () => import('../elements/Url.js'), 
        '../elements/Date': () => import('../elements/Date.js'), 
        '../elements/Textarea': () => import('../elements/Textarea.js'), 
        '../elements/Password': () => import('../elements/Password.js'),
        '../elements/WYSIWYG': () => import('../elements/WYSIWYG.js'), 
        '../elements/LanguagePicker': () => import('../elements/LanguagePicker.js'), 
        '../elements/Unknown': () => import('../elements/Unknown.js'), 
      }

      await (widgetPath in fields ? fields[widgetPath]() : import(`${widgetPath}.js`).catch(console.error)).then(fieldClass => {
        if (fieldClass === undefined) throw new Error(`No widget available for: ${definition['form:widget']?._}`)
        const name = Object.keys(fieldClass)[0]
        this.fieldClasses.set(widget, fieldClass[name])
        elementClass = this.fieldClasses.get(widget)
      }).catch((exception) => {
        console.log(exception)
      })
    }

    if (elementClass) {
      return new elementClass(definition, bindings, value, itemValues, parentValues, render, parent, index, children)
    }
  }
}