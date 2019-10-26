<template>
  <v-layout class="mb-5">
    <v-flex xs12>
      <h3 id="profile" class="headline">自己紹介</h3>
      <v-divider />

      <v-card class="mt-2">
        <v-card-title>
          <v-layout fill-height class="vertical-center">
            <v-avatar :size="128">
              <img src="/icon.png" />
            </v-avatar>

            <v-flex xs12 ml-4>
              <p class="mb-0">
                いせと申します。<br>
              </p>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
