import { html } from 'uhtml'
import { RdfForm } from '../RdfForm'

export class FormElementBase {

  readonly data: any
  readonly form: RdfForm

  constructor (formElementData, rdfForm: RdfForm) {
    this.form = rdfForm
    this.data = formElementData
  }

  get label () {
    const label = this.data?.predicateMeta?.label
    return label ? label?.[this.form.language] ?? label?.['default'] : ''
  }

  get description () {
    const comment = this.data?.predicateMeta?.comment
    return comment ? comment?.[this.form.language] ?? comment?.['default'] : ''
  }

  templateLabel () {
    return html`<label class="field-label">${this.label}</label>`
  }

  templateItem (quad) {
    const jsonQuad = quad.toJSON ? quad.toJSON() : quad
    const flagCode = jsonQuad.object?.language && jsonQuad.object?.language !== 'en' ? jsonQuad.object?.language : 'gb'

    return html`
      <div class="field-item">
        ${jsonQuad?.object?.language ? html`<img class="country-flag" src="${'/flags/' + flagCode + '.svg'}" />` : ''}
        <input type="text" value="${jsonQuad.object.value}">
      </div>
    `
  }

  templateDescription () {
    return html`<small>${this.description}</small>`
  }

  templateWrapper (field) {
    return html`<div class="field">
      ${this.templateLabel()}
      ${field.quads.map(quad => this.templateItem(quad))}
      ${this.templateDescription()}

      ${field.children && field.children.length ? html`
        <div class="children">${field.children.map(child => child.formElement.templateWrapper(child))}</div>
      ` : ''}
    </div>`
  }

}

