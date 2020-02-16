import { MutationTree, ActionTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";
import { RootState, Blog } from "../types";
import blogData from "../static/data/blog.json";

export const state = (): RootState => ({
  blogs: []
})

export const mutations: MutationTree<RootState> = {
  setBlogList(state: RootState, blogs: Blog[]): void {
    state.blogs = blogs
  }
}

export const getters = {
  getBlogDetail: (state: RootState) => (id: number) => {
    return state.blogs.find(blog => blog.id+'' === id+'');
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit (actionContext: ActionContext<S, R>, appContext: AppContext): void
}

export const actions: Actions<RootState, RootState> = {
  // サーバー起動時にデータを取得する場合
  async nuxtServerInit({ commit }, context) {
    let blogs: Blog[];
    let isStatic = false;
    blogs = isStatic ? blogData : await context.app.$axios.$get("./data/blog.json");
    commit("setBlogList", blogs);
  }
}

