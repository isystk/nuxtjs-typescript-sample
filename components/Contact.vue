<template>
  <v-layout class="mb-5">
    <v-flex xs12>
      <h3 id="contact" class="headline">コンタクト</h3>
      <v-divider />


      <div class="vertical-center subheading mt-3">
        <v-icon class="mr-2">mail</v-icon>

        <a :href="`mailto:${email}`">
          <span>メール({{email}})</span>
        </a>
      </div>

      <div class="vertical-center subheading mt-1">
        <v-icon class="mr-2">mdi-github-circle</v-icon>

        <a href="https://github.com/isystk">
          <span>GitHub</span>
        </a>
      </div>

      <div class="vertical-center subheading mt-1">
        <v-icon class="mr-2">search</v-icon>

        <a href="https://qiita.com/isystk@github">
          <span>Qiita</span>
        </a>
      </div>

      <div class="vertical-center subheading mt-1">
        <v-icon class="mr-2">mdi-pencil-circle-outline</v-icon>

        <a href="https://twitter.com/ise0615">
          <span>Twitter</span>
        </a>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
  
  email: string = '';

  mounted(): void {
    // 迷惑メール防止
    setTimeout(() => { this.email = 'ise0615@gmail.com' }, 100)
  }
}
</script>

