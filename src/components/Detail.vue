<template>
  <article class="detail" >
    <div class="entry-header">
      <h1 class="entry-title">{{post.title}}</h1>
    </div>
    <div class="entry-content" >
      <template v-for="e in post.contents" >
      <h2 :key="e.subTitle">{{e.subTitle}}</h2>
      <p :key="e.subTitle" v-html="e.text"></p>
      </template>
    </div>
    <div class="clearfix"></div>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({ type: String, required: true })
  postId?: number;

  post = this.$store.getters.getBlogDetail(this.postId);
  
}
</script>

