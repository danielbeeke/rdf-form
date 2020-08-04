<template>
  <v-textarea
    v-model="value"
    auto-grow
    :label="quad.fieldLabel"
  ></v-textarea>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Quad } from '../../Quad'

@Component
export default class RdfFieldText extends Vue {
  @Prop() private quad!: Quad;

  data () {
    return {
      value: this.quad.object.value
    }
  }
}

</script>
