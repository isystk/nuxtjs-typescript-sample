<template>
  <div class="wrap">
    <Header></Header>
    <div class="content">
      <main>
        <DetailList class="top" detail-link="/post/1/"></DetailList>
      </main>
      <side-menu></side-menu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from "vuex-class"
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SideMenu from '../components/SideMenu.vue';
import DetailList from '../components/DetailList.vue';

@Component({
  components: {
    Header,
    Footer,
    SideMenu,
    DetailList
  }
})
export default class extends Vue {
}

</script>
