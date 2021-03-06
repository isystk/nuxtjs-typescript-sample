const pkg = require('./package')
var webpack = require("webpack")

// コンテキストパス
const PRODUCTION_BASE_PATH = process.env.GITHUB_PAGES ? '/profile/' : '/'

export default {
  srcDir: "src/",

  /**
   * 環境変数
   * ビルド時に渡される env の値は、ここに記載することで文字列に置換される
   */
  env: {
    STATIC_PATH: PRODUCTION_BASE_PATH,
  },
  
  router: {
    base: PRODUCTION_BASE_PATH
  },

  // https://ja.nuxtjs.org/faq/host-port/
  server: {
    port: 3000,
    // 他のパソコンから IP でつながるように host を変更
    host: "0.0.0.0" // デフォルト: localhost
  },
  head: {
    title: "Isystk's Portfolio",
    meta: [
      { hid: "charset", charset: "utf-8" },
      { hid: "viewport", name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { hid: "noydir", name: "robots", content: "noydir" },
      { hid: "noodp", name: "robots", content: "noodp" },
      { hid: "index,follow", name: "robots", content: "index,follow" },
      { hid: "format-detection", name: "format-detection", content: "telephone=no"}
    ],
    link: [
      { rel: "icon", type: "image/vnd.microsoft.icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Orbitron" }
    ]
  },
  // loading: { color: "#fff" },
  // ローディングを使わない場合はここを false
  loading: false,
  /**
   * Global CSS
   * 他の scss ファイルに依存しない scss はこちらに
   */
  css: [
    { src: "@/assets/sass/app.scss", lang: "scss" },
  ],
  /**
   * Build configuration
   * webpack のビルドに関する設定はここに書く
   */
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],
  plugins: [
    "@plugins/vuetify",
    "@plugins/filter.js"
  ],
  manifest: {
    name: pkg.name,
    title: "Isystk's Portfolio",
    "og:title": "Isystk's Portfolio",
    description: pkg.description,
    lang: "ja",
    theme_color: "#fff",
    background_color: "#fff",
    display: "standalone",
    scope: "/profile/",
    start_url: "/profile/"
  },
  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  }
}
