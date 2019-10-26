<template>
  <v-layout class="mb-5">
    <v-flex xs12>
      <h3 id="works" class="headline">作品</h3>
      <v-divider />

      <v-container grid-list-sm>
        <v-layout row wrap>
          <work 
            href="#" 
            src="/img/work_portfolio.jpg"
            title="ポートフォリオサイト">

            このポートフォリオサイトです。<br>
            Nuxt.js + Vuetifyで作られています。
          </work>

        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Work from './Work.vue'

export default {
  components: { Work }
}
</script>
