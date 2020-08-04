<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab href="#tab-form">Form</v-tab>
      <v-tab href="#tab-debugger">Debugger</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-form">
        <h1>Form</h1>
        <div :key="index" v-for="(quad, index) of quads">
          <rdf-field-wrapper v-if="quad.fieldType && componentExists(quad.fieldType)" :quad="quad"></rdf-field-wrapper>
        </div>
      </v-tab-item>

      <v-tab-item value="tab-debugger">
        <h1>Debugger</h1>
        <rdf-inspector :quads="quads" />
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RdfManager } from '../RdfManager'
import { FieldResolver } from '../FieldResolver'
import RdfInspector from './RdfInspector.vue'
import { Quad } from '../Quad.js'
import RdfFieldWrapper from './RdfFieldWrapper.vue'

Vue.config.productionTip = false

@Component({
  components: {
    RdfFieldWrapper,
    RdfInspector
  }
})
export default class RdfForm extends Vue {
  @Prop() private rdf!: URL;
  private rdfManager: RdfManager;
  private fieldResolver: FieldResolver;
  private quads: Array<Quad> = [];

  data () {
    return {
      rdfManager: new RdfManager(this.rdf),
      fieldResolver: new FieldResolver(),
      tab: 'debugger',
      quads: []
    }
  }

  mounted () {
    this.rdfManager.addEventListener('quadAdded', ((event: CustomEvent) => {
      if (event?.detail?.quad) {
        const { quad } = event.detail
        this.enhanceQuad(quad)
        this.quads.push(quad)
      }
    }) as EventListener)
  }

  /**
   * Mutates the quad so it holds the fieldType and other things.
   * @param quad
   */
  enhanceQuad (quad: Quad) {
    quad.fieldType = this.fieldResolver.resolve(quad)
    return quad
  }

  componentExists (component: string) {
    const componentName = 'RdfField' + component.charAt(0).toUpperCase() + component.slice(1)
    return Vue.options && Vue.options.components && componentName in Vue.options.components
  }
}
</script>
