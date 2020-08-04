<template>
  <v-text-field
    v-model="value"
    :label="quad.fieldLabel"
  ></v-text-field>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Quad } from '../../Quad'

@Component
export default class RdfFieldString extends Vue {
  @Prop() private quad!: Quad;

  data () {
    return {
      value: this.quad.object.value,
      menu: false
    }
  }
}

</script>
