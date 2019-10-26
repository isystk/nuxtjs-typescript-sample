<template>
  <v-layout class="mb-5">
    <v-flex xs12>
      <h3 id="skills" class="headline">スキル</h3>
      <v-divider />

      <v-card class="mt-2">
        <v-layout row>
          <v-flex xs4 class="rating-standard">
            <v-rating 
              :value="3" 
              readonly 
              dense
              size="22"
              length="3" />

              <div>使い慣れている</div>
          </v-flex>

          <v-flex xs4 class="rating-standard">
            <v-rating 
              :value="2" 
              readonly 
              dense
              size="22"
              length="3" />

              <div>そこそこ使える</div>
          </v-flex>


          <v-flex xs4 class="rating-standard">
            <v-rating 
              :value="1" 
              readonly 
              dense
              size="22"
              length="3" />

              <div>入門程度</div>
          </v-flex>
        </v-layout>
      </v-card>

      <h3 class="title my-3">プログラミング言語</h3>

      <template v-for="e in skills" >
        <skill 
          :title="e.title" 
          :color="e.color"
          :rating="e.rating" :key="e">
          
          <template slot="text">
            {{e.text}}<br>
          </template>

          <template slot="list" v-for="e2 in e.items" >
            <skill-list-item :name="e2.name" :rating="e2.rating" :key="e2">
            {{e2.text}}<br>
            </skill-list-item>
          </template>
        </skill>
      </template>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skill from './Skill.vue';
import SkillListItem from './SkillListItem.vue';
@Component({
  components: {
    Skill, SkillListItem
  }
})
export default class Skills extends Vue {
  skills = [
  {
    "title": "JavaScript",
    "color": "yellow",
    "rating": 3,
    "text": "xxxxx",
    "items" : [
      {
        "name": "Node.js",
        "rating": 2, 
        "noDivider": false,
        "text": "hogehoge"
      },
      {
        "name": "Vue.js",
        "rating": 3, 
        "noDivider": false,
        "text": "hogehoge"
      }
    ]
  },

  {
    "title": "Java",
    "color": "red",
    "rating": 3,
    "text": "xxxxx",
    "items" : [
      {
        "name": "Node.js",
        "rating": 2, 
        "noDivider": false,
        "text": "hogehoge"
      },
      {
        "name": "Vue.js",
        "rating": 3, 
        "noDivider": false,
        "text": "hogehoge"
      }
    ]
  }
]
}
</script>

