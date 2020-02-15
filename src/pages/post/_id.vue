<template>
  <div class="wrap">
    <Header></Header>
    <div class="content">
      <main>
        <detail></detail>
      </main>
      <side-menu></side-menu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from "vuex-class"
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import SideMenu from '../../components/SideMenu.vue';
import Detail from '../../components/Detail.vue';

@Component({
  components: {
    Header,
    Footer,
    SideMenu,
    Detail
  }
})
export default class extends Vue {
  validate ({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  }
}

</script>
