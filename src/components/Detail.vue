<template>
  <article class="detail" >
    {{link}}
    <a href="/post/1/">
    <div class="entry-header">
      <h1 class="entry-title">タイトルタイトルタイトルタイトルタイトル</h1>
    </div>
    <div class="entry-content" >
      <h2>サブタイトル</h2>
      <h4>TEXTTEXTTEXT</h4>
      <p>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
      <h4>TEXTTEXTTEXT</h4>
      <p>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
      <h4>TEXTTEXTTEXT</h4>
      <p>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
    </div>
    <div class="clearfix"></div>
    </a>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  props: ['link']
}
</script>

