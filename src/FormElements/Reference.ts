import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { html } from 'uhtml'
import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { getObjectOfQuadByPredicate } from '../Helpers'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

dom.watch()
library.add(faTimes)

/**
 * TODO finish https://lookup.dbpedia.org/api/prefix?query=CS%20Lewis
 */

export class Reference extends FormElementBase implements FormElement {

  static type: string = 'reference'
  public metas = []

  async init(): Promise<void> {
    await super.init();
    this.updateMetas().then(() => this.render())
    this.addEventListener('change', () => {
      this.updateMetas().then(() => {
        this.render()
      })
    })
  }

  removeReference (index) {
    this.values[index]['@id'] = ''
    this.metas[index] = {}
  }

  templateItem (index, value) {
    const textValue = value?.['@id']

    const meta = this.metas[index]

    return meta && Object.keys(meta).length ? html`
    <div class="reference-preview">
        ${meta.thumbnail ? html`<img class="reference-preview-left" src="${meta.thumbnail}" />` : ''}
        <div class="reference-preview-right">
          ${meta.label ? html`<h3 class="reference-preview-title">${meta.label} <button class="button" onclick="${() => {this.removeReference(index); this.render()}}"><i class="fas fa-times"></i></button></h3>` : ''}
          ${meta.description ? html`<small>${meta.description}</small>` : ''}
          <small>${textValue}</small>
        </div>
    </div>
    ` : html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      value="${textValue}"
      required="${this.isRequired(index)}"
    >`
  }

  async updateMetas () {
    console.log(this.values)
    for (const [index, value] of this.values.entries()) {
      const uri = value?.['@id']
      this.metas[index] = await this.fetchMeta(uri)
    }
  }

  async fetchMeta (uri = undefined) {
    if (!uri || uri.substr(0, 4) !== 'http') return
    const quads = await this.form.ontologyRepository.dereference(uri)

    return {
      thumbnail: getObjectOfQuadByPredicate('http://dbpedia.org/ontology/thumbnail', quads),
      label: getObjectOfQuadByPredicate('http://www.w3.org/2000/01/rdf-schema#label', quads),
      description: getObjectOfQuadByPredicate('http://purl.org/dc/terms/description', quads),
    }
  }
}
