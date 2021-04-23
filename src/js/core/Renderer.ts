import { render, html } from 'https://unpkg.com/uhtml/esm/async.js?module'

import { CoreComponent } from '../types/CoreComponent'
import { ElementInstance } from '../types/ElementInstance'
import { Registry } from './Registry'
import { lastPart } from '../helpers/lastPart'
import { t, Language } from './Language'
import { RdfForm } from '../RdfForm'

export class Renderer extends EventTarget implements CoreComponent {
  public ready: boolean = false
  private fieldInstances: Map<object, ElementInstance> = new Map()
  protected form: RdfForm

  constructor (rdfForm: RdfForm) {
    super()
    this.init()
    this.form = rdfForm
  }

  async init () {
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  render () {
    const templates = this.nest(this.form.formDefinition.chain, this.form.registry, this.form.formData.proxy, this.form)

    const formSubmit = (event) => {
      event.preventDefault()
      event.stopImmediatePropagation()
      this.form.dispatchEvent(new CustomEvent('submit', { detail: {
        proxy: this.form.formData.proxy,
        expanded: this.form.formData.proxy.$,
      } }))
    }

    render(this.form.shadow, html`
      <link rel="stylesheet" href="/css/rdf-form.css" />

      <form onsubmit=${formSubmit}>

      ${templates}
      <button class="button save">${t`Submit`}</button>
      </form>
    `)
  }

  nest (formDefinition: Map<any, any>, registry: Registry, formData: any, parent: any, depth = 0) {
    const templates = []

    for (const [bindings, [field, children]] of formDefinition.entries()) {
      const mainBinding = field['form:binding']?._

      const isContainer = lastPart(field['@type'][0]) === 'Container'
      const isUiComponent = lastPart(field['@type'][0]) === 'UiComponent'

      let wrapperFieldInstance = isUiComponent ? this.fieldInstances.get(field.$) : false
      
      if (!wrapperFieldInstance) wrapperFieldInstance = registry.setupElement(
        field, bindings, null, formData, () => this.render(), parent
      )

      if (!this.fieldInstances.has(field.$)) this.fieldInstances.set(field.$, wrapperFieldInstance)

      const innerTemplates = []

      if (mainBinding) {

        /**
         * Existing values.
         */
        const applicableValues = formData[mainBinding] ? [...formData[mainBinding].entries()]
        .filter(([index, value]) => !value['@language'] || value['@language'] === Language.l10nLanguage) : []

        if (applicableValues.length) {

          for (const [index, value] of applicableValues) {
            if (bindings.length > 1) {
              console.log(value.$)              
            }
            const fieldInstance = this.fieldInstances.get(value.$) ?? registry.setupElement(
              field, bindings, value, formData, () => this.render(), parent
            )
            if (!this.fieldInstances.has(value.$)) this.fieldInstances.set(value.$, fieldInstance)

            const childValues = field['form:widget']?._ === 'group' || isContainer ? formData[mainBinding][index] : formData[mainBinding]
            const childTemplates = children.size ? this.nest(children, registry, childValues, wrapperFieldInstance, depth + 1) : []
            innerTemplates.push(fieldInstance.item([]))
          }
        }

        /**
         * New items
         */
        else {
          const childTemplates = children.size ? this.nest(children, registry, [], wrapperFieldInstance) : []
          innerTemplates.push(wrapperFieldInstance.item(childTemplates))
        }
      }

      /**
       * Containers and other UI components
       */
      else if (isContainer || isUiComponent) {
        const childTemplates = children.size ? this.nest(children, registry, formData, wrapperFieldInstance) : []
        innerTemplates.push(wrapperFieldInstance.item(childTemplates))
      }

      templates.push(wrapperFieldInstance.wrapper(innerTemplates))
    }

    return templates
  }
}