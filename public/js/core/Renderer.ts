import { render, html } from 'https://unpkg.com/uhtml/esm/async.js?module'

import { CoreComponent } from '../types/CoreComponent'
import { ElementInstance } from '../types/ElementInstance'
import { FormDefinition } from './FormDefinition'
import { Registry } from './Registry'

export class Renderer extends EventTarget implements CoreComponent {
  public ready: boolean = false
  private fieldInstances: WeakMap<object, ElementInstance> = new WeakMap()

  constructor () {
    super()
    this.init()
  }

  async init () {
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  render (formDefinition: FormDefinition, registry: Registry, formData: any, element: HTMLElement) {
    const templates = this.nest(formDefinition.chain, registry, formData)
    render(element, html`
      ${templates}
    `)
  }

  nest (formDefinition: Map<any, any>, registry: Registry, formData: any) {
    const templates = []

    for (const [bindings, [field, children]] of formDefinition.entries()) {
      const mainBinding = field['form:binding']?._

      const wrapperFieldInstance = this.fieldInstances.get(field) ?? registry.setupElement(field)
      if (!this.fieldInstances.has(field)) this.fieldInstances.set(field, wrapperFieldInstance)
      const innerTemplates = []
      if (mainBinding) {
        /**
         * Existing values.
         */
        if (formData[mainBinding]) {
          for (const [index, value] of formData[mainBinding].entries()) {
            const fieldInstance = this.fieldInstances.get(value) ?? registry.setupElement(field, value)
            if (!this.fieldInstances.has(value)) this.fieldInstances.set(value, fieldInstance)
            const childTemplates = children.size ? this.nest(children, registry, formData[mainBinding][index]) : []
            innerTemplates.push(fieldInstance.item(childTemplates))
          }  
        }

        /**
         * New items
         */
        else {
          const childTemplates = children.size ? this.nest(children, registry, []) : []
          innerTemplates.push(wrapperFieldInstance.item(childTemplates))
        }
      }

      templates.push(wrapperFieldInstance.wrapper(innerTemplates))

    }

    return templates
  }
}