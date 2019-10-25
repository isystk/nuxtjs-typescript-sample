<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Sample App
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content class="bar-container">
      <p class="title">
        This year progress
      </p>
      <v-progress-linear
        v-model="yearProgress"
      ></v-progress-linear>
      <p class="percentage">
        {{ `${this.yearProgress.toFixed(6)}%` }}
      </p>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types";
import Card from "~/components/Card.vue"

@Component({
  components: {}
})
export default class extends Vue {

  items: Object[] = []
  yearProgress: number = 20

  mounted() {
    this.items = [
      {
        title: 'Progress',
        icon: 'timer'
      }
    ]
    
    this.start()
  }
  start() {
    setInterval(() => {
      const date: Date = new Date()
      const numDaysOfMonth: number = this.calculateDaysOfMonth(date.getFullYear(), date.getMonth())

      const seconds: number = date.getSeconds() + date.getMilliseconds() / 1000.0
      const minutes: number = date.getMinutes() + seconds / 60.0
      const hours: number = date.getHours() + minutes / 60.0
      const days: number = date.getDate() + hours / 24.0
      const months: number = 1.0 * date.getMonth() + days / numDaysOfMonth

      this.yearProgress = 100.0 * months / 12
    }, 100)
  }

  calculateDaysOfMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate()
  }
}
</script>

<style scoped>
.title {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
}

.percentage {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  text-align: center;
}

.bar-container {
  margin: 40px;
}

</style>
