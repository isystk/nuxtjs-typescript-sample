<template>
  <v-card class="mb-3" :color="color">
    <v-card-title>
      <v-layout>
        <span class="title">{{ title }}</span>

        <v-spacer />
        
        <v-rating 
          :value="rating" 
          readonly 
          dense
          size="22"
          length="3" />
      </v-layout>
    </v-card-title>

    <v-card-text class="white">
      <p class="body-2 mb-0">
        <slot name="text"></slot>
      </p>
    </v-card-text>

    <div class="white">
      <slot name="list"></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'transparent'
    },
    rating: {
      type: Number,
      default: 0
    },
  },
}
</script>

