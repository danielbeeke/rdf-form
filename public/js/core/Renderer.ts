import { render, html } from 'https://unpkg.com/uhtml/esm/async.js?module'

import { CoreComponent } from '../types/CoreComponent'
import { ElementInstance } from '../types/ElementInstance'
import { Registry } from './Registry'
import { lastPart } from '../helpers/lastPart'
import { t, Language } from './Language'
import { RdfForm2 } from '../RdfForm2'

export class Renderer extends EventTarget implements CoreComponent {
  public ready: boolean = false
  private fieldInstances: Map<object, ElementInstance> = new Map()
  protected form: RdfForm2

  constructor (rdfForm: RdfForm2) {
    super()
    this.init()
    this.form = rdfForm
  }

  async init () {
    this.ready = true
    this.dispatchEvent(new CustomEvent('ready'))
  }

  render () {
    const templates = this.nest(this.form.formDefinition.chain, this.form.registry, this.form.formData.proxy)

    const formSubmit = (event) => {
      event.preventDefault()
      event.stopImmediatePropagation()
      this.form.dispatchEvent(new CustomEvent('submit', { detail: this.form.formData.proxy.$ }))
    }

    const languageClick = (langCode) => {
      Language.l10nLanguage = langCode
      this.render()
    }

    const languageTabs = Object.keys(Language.l10nLanguages).length > 1 ? html`<div class="language-tabs">
    ${Object.entries(Language.l10nLanguages).map(([langCode, language]) => html`
      <button lang="${langCode}" class="${'language-tab ' + (langCode === Language.l10nLanguage ? 'active' : '')}" type="button" onclick="${() => languageClick(langCode)}">${Language.l10nLanguages?.[langCode] ?? language}</button>
    `)}
    </div>` : ''

    render(this.form.shadow, html`
      <link rel="stylesheet" href="/css/rdf-form.css" />

      <form onsubmit=${formSubmit}>

      ${languageTabs}
      ${templates}
      <button class="button save">${t`Submit`}</button>
      </form>
    `)
  }

  nest (formDefinition: Map<any, any>, registry: Registry, formData: any) {
    const templates = []

    for (const [bindings, [field, children]] of formDefinition.entries()) {
      const mainBinding = field['form:binding']?._

      const wrapperFieldInstance = this.fieldInstances.get(field.$) ?? registry.setupElement(field, bindings, null, 0, () => this.render(), this.form.comunica)
      if (!this.fieldInstances.has(field.$)) this.fieldInstances.set(field.$, wrapperFieldInstance)
      const innerTemplates = []
      const isContainer = lastPart(field['@type'][0]) === 'Container'
      const isUiComponent = lastPart(field['@type'][0]) === 'UiComponent'

      if (mainBinding) {

        /**
         * Existing values.
         */
        if (formData[mainBinding]) {
          for (const [index, value] of formData[mainBinding].entries()) {
            const fieldInstance = this.fieldInstances.get(value.$) ?? registry.setupElement(field, bindings, formData, index, () => this.render(), this.form.comunica)
            if (!this.fieldInstances.has(value.$)) this.fieldInstances.set(value.$, fieldInstance)

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
       * Containers and other UI components
       */
      else if (isContainer || isUiComponent) {
        const childTemplates = children.size ? this.nest(children, registry, formData) : []
        innerTemplates.push(wrapperFieldInstance.item(childTemplates))
      }

      templates.push(wrapperFieldInstance.wrapper(innerTemplates))
    }

    return templates
  }
}