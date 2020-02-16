<template>
  <div class="side-menu side-left">
    　<div class="sidebar-wrapper">
      　<h4 class="sidebar-title">メニュー</h4>
      <ul>
        <li><nuxt-link :to="STATIC_PATH">TOPページ</nuxt-link></li>
        <li><nuxt-link :to="STATIC_PATH+'company/'">会社概要</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  STATIC_PATH = process.env.STATIC_PATH
}
</script>

