import { render, html } from 'https://unpkg.com/uhtml/esm/async.js?module'

import { CoreComponent } from '../types/CoreComponent'
import { ElementInstance } from '../types/ElementInstance'
import { FormDefinition } from './FormDefinition'
import { Registry } from './Registry'
import { lastPart } from '../helpers/lastPart'
import { t } from './Language'

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

  render (formDefinition: FormDefinition, registry: Registry, formData: any, element: HTMLElement & { shadow: any }) {
    const templates = this.nest(formDefinition.chain, registry, formData)

    const formSubmit = (event) => {
      event.preventDefault()
      event.stopImmediatePropagation()
      element.dispatchEvent(new CustomEvent('submit', { detail: formData.$ }))
    }

    render(element.shadow, html`
      <link rel="stylesheet" href="/css/rdf-form.css" />

      <form onsubmit=${formSubmit}>
      ${templates}
      <button>${t`Submit`}</button>
      </form>
    `)
  }

  nest (formDefinition: Map<any, any>, registry: Registry, formData: any) {
    const templates = []

    for (const [bindings, [field, children]] of formDefinition.entries()) {
      const mainBinding = field['form:binding']?._

      const wrapperFieldInstance = this.fieldInstances.get(field) ?? registry.setupElement(field, bindings)
      if (!this.fieldInstances.has(field)) this.fieldInstances.set(field, wrapperFieldInstance)
      const innerTemplates = []
      const isContainer = lastPart(field['@type'][0]) === 'Container'

      if (mainBinding) {
        /**
         * Existing values.
         */
        if (formData[mainBinding]) {

          for (const [index, value] of formData[mainBinding].entries()) {
            const fieldInstance = this.fieldInstances.get(value) ?? registry.setupElement(field, bindings, formData, index)
            if (!this.fieldInstances.has(value)) this.fieldInstances.set(value, fieldInstance)

            let childValues
            
            if (field['form:widget']?._ === 'group' || isContainer) {
              childValues = formData[mainBinding][index]
            }
            else {
              childValues = formData[mainBinding]
            }

            const childTemplates = children.size ? this.nest(children, registry, childValues) : []
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

      /**
       * Containers
       */
      else if (isContainer) {
        const childTemplates = children.size ? this.nest(children, registry, formData) : []
        innerTemplates.push(wrapperFieldInstance.item(childTemplates))
      }

      templates.push(wrapperFieldInstance.wrapper(innerTemplates))
    }

    return templates
  }
}