const pkg = require('./package')

/**
 * AMP 用のHTMLに変換する
 */
const modifyAmpToHtml = (html: string) => {
  // Add amp-custom tag to added CSS

  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  html = html.replace(/<\/style><style amp-custom data-vue-ssr-id="406f0688:0">@charset "UTF-8";/g, '')
  html = html.replace(/<style amp-custom data-vue-ssr-id="b15e4592:0">@charset "UTF-8";/g, '<style amp-custom data-vue-ssr-id="b15e4592:0">')
  // Remove every script tag from generated HTML
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

  html = html.replace(/<html/gi, '<html ⚡')
  html = html.replace(/<img([^>]*)>/gi, (match, sub) => {
    return `<amp-img ${sub} layout=intrinsic></amp-img>`
  })
  const ampBoilerplate = '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'
  // Add AMP script before </head>
  const ampYoutube = '<script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>'
  const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
  const ampSocial = '<script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>'
  html = html.replace('</head>', ampScript + ampBoilerplate + ampSocial + ampYoutube + '</head>')
  return html
}

export default {
  env: {},
  srcDir: "src/",
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
  hooks: {
    // This hook is called before rendering the html to the browser
    'render:route': (url: string, page: any) => {
      page.html = modifyAmpToHtml(page.html)
    }
  },
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
    scope: "/",
    start_url: "/"
  },
  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  }
}
