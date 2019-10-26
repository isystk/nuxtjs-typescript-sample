import { MutationTree, ActionTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";
import { RootState, Skill } from "~/types";
import skillsData from "~/static/data/skills.json";

export const state = (): RootState => ({
  skill: []
})

export const mutations: MutationTree<RootState> = {
  setSkill(state: RootState, skills: Skill[]): void {
    state.skill = skills
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit (actionContext: ActionContext<S, R>, appContext: AppContext): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let skills: Skill[] = []

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    skills = context.isStatic ?
      skillsData :
      await context.app.$axios.$get("./data/skills.json")

      console.log("--aaa--");
      console.log(skills);
      console.log("--ccc--");

    commit("setSkill", skills.slice(0, 10))
  }
}
