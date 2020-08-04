<template>
  <v-datetime-picker :label="quad.fieldLabel" v-model="value"> </v-datetime-picker>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Quad } from '../../Quad'

@Component
export default class RdfFieldDate extends Vue {
  @Prop() private quad!: Quad;

  data () {
    return {
      value: new Date(this.quad.object.value),
      menu: false
    }
  }
}

</script>
