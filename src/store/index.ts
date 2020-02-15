import { MutationTree, ActionTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";
import { RootState, Blog } from "../types";
import blogData from "../static/data/blog.json";

export const state = (): RootState => ({
  blogs: []
})

export const mutations: MutationTree<RootState> = {
  setBlog(state: RootState, blogs: Blog[]): void {
    state.blogs = blogs
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit (actionContext: ActionContext<S, R>, appContext: AppContext): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let blogs: Blog[];
    blogs = context.isStatic ?
      blogData :
      await context.app.$axios.$get("./data/blog.json");
    commit("setBlog", blogs);
  }
}
