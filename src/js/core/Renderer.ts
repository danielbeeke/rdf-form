import { render, html } from 'https://unpkg.com/uhtml/esm/async.js?module'

import { CoreComponent } from '../types/CoreComponent'
import { ElementInstance } from '../types/ElementInstance'
import { Registry } from './Registry'
import { lastPart } from '../helpers/lastPart'
import { flatMapProxy } from '../helpers/flatMapProxy'
import { containerProxy } from '../helpers/containerProxy'
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

  async render () {
    const templates = await this.nest(this.form.formDefinition.chain, this.form.registry, this.form.formData.proxy, this.form)

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
      <div class="actions">
        <button class="button save primary big">${t`Save`}</button>
      </div>
      </form>
    `)
  }

  async nest (formDefinition: Map<any, any>, registry: Registry, formData: any, parent: any) {
    const templates = []

    for (const [bindings, [field, children]] of formDefinition.entries()) {
      const mainBinding = field['form:binding']?._

      const isContainer = lastPart(field['@type'][0]) === 'Container'
      const isUiComponent = lastPart(field['@type'][0]) === 'UiComponent'

      let wrapperFieldInstance = isUiComponent || isContainer ? this.fieldInstances.get(field.$) : false

      if (!wrapperFieldInstance) wrapperFieldInstance = await registry.setupElement(
        field, bindings, null, null, formData, () => this.render(), parent, null, children
      )

      if (!wrapperFieldInstance) continue;

      if (!this.fieldInstances.has(field.$)) this.fieldInstances.set(field.$, wrapperFieldInstance)

      const innerTemplates = []

      if (mainBinding && !isContainer) {

        /**
         * Existing values.
         */
        let applicableValues = formData?.[mainBinding] ? [...formData[mainBinding].values()]
        .filter((value) => !value['@language'] || value['@language'] === Language.l10nLanguage) : []

        if (formData && Array.isArray(formData.$)) {
          applicableValues = flatMapProxy(formData, mainBinding)
          .filter((value) => !value['@language'] || value['@language'] === Language.l10nLanguage)
        }

        if (applicableValues.length) {
          for (const [index, value] of applicableValues.entries()) {
            const fieldInstance = this.fieldInstances.get(value.$) ?? await registry.setupElement(
              field, bindings, value, formData?.[index], formData, () => this.render(), parent, index, children
            )
            if (!this.fieldInstances.has(value.$)) this.fieldInstances.set(value.$, fieldInstance)

            const childValues = field['form:widget']?._ === 'group' ? formData[mainBinding][index] : formData[mainBinding]
            const childTemplates = children.size ? await this.nest(children, registry, childValues, wrapperFieldInstance) : []
            innerTemplates.push(fieldInstance.item(childTemplates))
          }  
        }

        /**
         * New items
         */
        else {
          const childTemplates = children.size ? await this.nest(children, registry, [], wrapperFieldInstance) : []
          innerTemplates.push(wrapperFieldInstance.item(childTemplates))
        }
      }

      /**
       * UI components
       */
      else if (isUiComponent) {
        const childTemplates = children.size ? await this.nest(children, registry, formData, wrapperFieldInstance) : []
        innerTemplates.push(wrapperFieldInstance.item(childTemplates))
      }

      /**
       * Containers
       */
      else if (isContainer) {
        const childTemplates = children.size ? await this.nest(children, registry, mainBinding ? containerProxy(formData, mainBinding) : formData, wrapperFieldInstance) : []
        innerTemplates.push(wrapperFieldInstance.item(childTemplates))
      }

      templates.push(wrapperFieldInstance.wrapper(innerTemplates))
    }

    return templates
  }
}