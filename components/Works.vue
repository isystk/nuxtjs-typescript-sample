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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Work from './Work.vue';
@Component({
  components: {
    Work
  }
})
export default class Works extends Vue {
}
</script>
