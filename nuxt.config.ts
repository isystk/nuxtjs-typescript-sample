const pkg = require('./package')

export default {
  srcDir: "src/",
  /**
   * 環境変数
   * ビルド時に渡される env の値は、ここに記載することで文字列に置換される
   */
  env: {
    STATIC_PATH: process.env.NODE_ENV === 'production' ? '/nuxtjs' : '/'
  },
  router: {
    base: process.env.NODE_ENV === 'production' ? '/nuxtjs' : '/'
  },
  server: {
    port: 3000,
    // 他のパソコンから IP でつながるように host を変更
    host: "0.0.0.0" // デフォルト: localhost
  },
  head: {
    title: "nuxtjs-sample｜デモページ",
    meta: [
      { hid: "charset", charset: "utf-8" },
      { hid: "viewport", name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { hid: "noydir", name: "robots", content: "noydir" },
      { hid: "noodp", name: "robots", content: "noodp" },
      { hid: "index,follow", name: "robots", content: "index,follow" },
      { hid: "format-detection", name: "format-detection", content: "telephone=no"}
    ],
    script: [
      { src: '/js/jquery-3.4.1.min.js' }
    ],
    link: [
      { rel: "icon", type: "image/vnd.microsoft.icon", href: "/favicon.ico" }
    ],
    bodyAttrs: {
      class: 'column2 side-right'
    }
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
    "@nuxtjs/axios"
  ],
  plugins: [
  ],
  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  }
}
