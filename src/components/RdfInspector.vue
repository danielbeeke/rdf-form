<template>
  <table>
    <thead>
    <th>Object</th>
    <th>Predicate</th>
    <th>Subject</th>
    </thead>
    <tbody>
    <tr :key="quad.predicate.value + '-' + index" v-for="(quad, index) in quads">
      <td>{{ quad.object }}</td>
      <td>{{ quad.predicate.value }}</td>
      <td>{{ quad.subject }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RdfInspector extends Vue {
  @Prop() private quads!: Array<object>;
}

</script>
