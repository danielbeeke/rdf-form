import {render, html} from 'uhtml'
import '../scss/style.scss'

export interface Renderer {
  render(element, formStructure)
  getTemplates()
}

export class RendererUhtml implements Renderer {
  render (element, formStructure) {
    render(element, html`${formStructure.children.map(
      child => child.templates[child.children.length ? 'group' : 'wrapper'](child))}`)
  }

  getTemplates() {
    return {
      label: field => html`<label class="field-label">${field.label}</label>`,
      item: function (field, quad) {
        // TODO toJSON does not always exist
        const jsonQuad = quad.toJSON ? quad.toJSON() : quad
        const flagCode = jsonQuad.object?.language && jsonQuad.object?.language !== 'en' ? jsonQuad.object?.language : 'gb'

        return html`
          <div class="field-item">
            ${jsonQuad?.object?.language ? html`<img class="country-flag" src="${'/flags/' + flagCode + '.svg'}" />` : ''}
            <input type="text" value="${jsonQuad.object.value}">
          </div>
        `
      },
      description: field => html`<small>${field.description}</small>`,
      group: field => html`<details open>
          <summary>${field.label}</summary>
          ${html`<div class="children">${field.children.map(child => child.templates[child.children.length ? 'wrapper' : 'wrapper'](child))}</div>`}
        </details>`,
      wrapper: field => html`<div class="field">
          ${field.templates.label(field)}
          ${field.quads.map(quad => field.templates.item(field, quad))}
          ${field.templates.description(field)}

          ${field.children && field.children.length ? html`
            <div class="children">${field.children.map(child => child.templates.wrapper(child))}</div>
          ` : ''}
        </div>`,
    }
  }
}
