<template>
  <article class="detail" >
    <nuxt-link :to="{'path': detailLink}">
      <div class="entry-header">
        <div class="category_link">データベース</div>
        <h1 class="entry-title">タイトルタイトルタイトルタイトルタイトル</h1>
      </div>
      <div class="clearfix"></div>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({ type: String, required: false })
  detailLink?: string;
}
</script>

