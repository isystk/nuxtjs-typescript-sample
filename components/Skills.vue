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

      <skill 
        title="JavaScript" 
        color="yellow"
        :rating="3">
        
        <template slot="text">
           XXX<br>
        </template>

        <template slot="list">
          <skill-list-item name="Node.js" :rating="2">
           XXX<br>
          </skill-list-item>

          <skill-list-item name="Vue.js" :rating="3">
           XXX<br>
          </skill-list-item>

          <skill-list-item name="jQuery" :rating="2">
           XXX<br>
          </skill-list-item>

          <skill-list-item name="TypeScript" :rating="1">
           XXX<br>
          </skill-list-item>

        </template>
      </skill>

      <skill
        title="Java"
        color="red accent-1"
        :rating="3">

        <template slot="text">
          XXX<br>
        </template>

        <template slot="list">
          <skill-list-item name="Spring Framework(Spring Boot)" :rating="3">
            XXX<br>
          </skill-list-item>

        </template>
      </skill>

      <h3 class="title my-3">データベース</h3>

      <v-card>
        <skill-list-item name="MySQL" :rating="2" no-divider>
          XXX<br>
        </skill-list-item>

        <skill-list-item name="Oracle Database 11g" :rating="1">
          XXX<br>
        </skill-list-item>

        <skill-list-item name="MongoDB" :rating="1">
          XXX<br>
        </skill-list-item>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Skill from './Skill.vue'
import SkillListItem from './SkillListItem.vue'

export default {
  components: { Skill, SkillListItem }
}
</script>

