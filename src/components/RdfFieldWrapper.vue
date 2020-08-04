<template>
  <div class="rdf-field">
    <div :is="'rdf-field-' + quad.fieldType" :quad="quad"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Quad } from '../Quad'

@Component
export default class RdfFieldWrapper extends Vue {
  @Prop() private quad!: Quad;
}
</script>
