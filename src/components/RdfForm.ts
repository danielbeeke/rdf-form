import wrap from '@vue/web-component-wrapper'
import { RdfManager } from '../RdfManager.ts'
Vue.config.productionTip = false

const RdfForm = {
  props: ['rdf'],
  mounted () {
    const rdfForm = new RdfManager(this.rdf)
    rdfForm.addEventListener('quadAdded', (event) => {
      const { quad } = event.detail
      this.quads.push(quad)
    })
  },
  template: `<div>
    <ul>
      <li v-for="quad in quads">
        <span>{{ quad.object.id }}</span>
        <span>{{ quad.predicate.id }}</span>
        <span>{{ quad.subject.id }}</span>
      </li>
    </ul>
  </div>`,
  data () {
    return {
      quads: []
    }
  }
}

window.customElements.define('rdf-form', wrap(Vue, RdfForm))
