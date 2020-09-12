import { html } from 'uhtml'

export class FormElementBase {

  label (field) {
    return html`<label class="field-label">${field.label}</label>`
  }

  item (field, quad) {
    const jsonQuad = quad.toJSON ? quad.toJSON() : quad
    const flagCode = jsonQuad.object?.language && jsonQuad.object?.language !== 'en' ? jsonQuad.object?.language : 'gb'

    return html`
      <div class="field-item">
        ${jsonQuad?.object?.language ? html`<img class="country-flag" src="${'/flags/' + flagCode + '.svg'}" />` : ''}
        <input type="text" value="${jsonQuad.object.value}">
      </div>
    `
  }

  description (field) {
    return html`<small>${field.description}</small>`
  }

  group (field) {
    return html`<details open>
      <summary>${field.label}</summary>
      ${html`<div class="children">${field.children.map(child => child.formElement[child.children.length ? 'wrapper' : 'wrapper'](child))}</div>`}
    </details>`
  }

  wrapper (field) {
    return html`<div class="field">
      ${field.formElement.label(field)}
      ${field.quads.map(quad => field.formElement.item(field, quad))}
      ${field.formElement.description(field)}

      ${field.children && field.children.length ? html`
        <div class="children">${field.children.map(child => child.formElement.wrapper(child))}</div>
      ` : ''}
    </div>`
  }

}

