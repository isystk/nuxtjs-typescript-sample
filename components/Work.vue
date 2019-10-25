<template>
  <v-flex xs12 sm6 lg4>
    <v-card>
      <a :href="href">
        <v-img height="200" :src="src">
          <v-layout
            align-end
            fill-height
            pa-3
            white--text>

            <div class="subheading">{{ title }}</div>
          </v-layout>
        </v-img>
      </a>

      <v-card-title>
        <p class="body-2 mb-0">
          <slot></slot>
        </p>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
