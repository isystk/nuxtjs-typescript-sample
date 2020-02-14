import { MutationTree, ActionTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";
import { RootState, News } from "../types";
import newsData from "../static/data/news.json";

export const state = (): RootState => ({
  news: []
})

export const mutations: MutationTree<RootState> = {
  setNews(state: RootState, news: News[]): void {
    state.news = news
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit (actionContext: ActionContext<S, R>, appContext: AppContext): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let news: News[];
    news = context.isStatic ?
      newsData :
      await context.app.$axios.$get("./data/news.json");
    commit("setNews", news);
  }
}
