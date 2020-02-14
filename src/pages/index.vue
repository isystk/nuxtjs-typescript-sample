<template>
  <div class="wrap">
    <header>
      <div class="header-image">
        <div class="logo">XSSカイジ</div>
      </div>
    </header>
    <div class="content">
      <div class="main">
        <news></news>
      </div>
    </div>
    <footer class="footer">
      <section class="footer1"></section>
      <section class="footer2">© 2020 isystk.com</section>
    </footer>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from "vuex-class"
import News from '../components/News.vue';

@Component({
  components: {
    News
  }
})
export default class extends Vue {
}

</script>
