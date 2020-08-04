<template>
  <v-combobox
    multiple
    v-model="value"
    :label="quad.fieldLabel"
    small-chips
    deletable-chips
    class="tag-input"
    :search-input.sync="search"
    @keyup.tab="updateTags"
    @paste="updateTags">
    <template v-slot:selection="data">
      <v-chip
        small
        :key="JSON.stringify(data.item)"
        v-bind="data.attrs"
        :input-value="data.selected"
        :disabled="data.disabled"
      >
        {{ data.item }}
        <v-icon
          small
          @click="data.parent.selectItem(data.item)"
        >close</v-icon>
      </v-chip>
    </template>
  </v-combobox>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Quad } from '../../Quad'

@Component
export default class RdfFieldString extends Vue {
  @Prop() private quad!: Quad;

  data () {
    return {
      value: this.quad.object.value.split(','),
      search: ''
    }
  }

  updateTags () {
    this.$nextTick(() => {
      this.value.push(...this.search.split(','))
      this.$nextTick(() => {
        this.search = ''
      })
    })
  }
}
</script>
