<template>
  <v-container fluid>
    <v-row>
      <v-col cols="10">
        <div :is="'rdf-field-' + quad.fieldType" :quad="quad"></div>
      </v-col>

      <v-col cols="2">
        <v-btn small>
          <v-icon>close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Quad } from '../Quad'

@Component
export default class RdfFieldWrapper extends Vue {
  @Prop() private quad!: Quad;
}
</script>
