const pkg = require('./package')

export default {
  env: {},
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Orbitron' }
    ]
  },
  loading: { color: "#fff" },
  css: [
    { src: '~/assets/sass/app.scss', lang: 'scss' },
  ],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: [
    "@nuxtjs/axios",
  ],
  plugins: [
    '@plugins/vuetify'
  ],
  manifest: {
    name: "Isystk's Portfolio",
    lang: 'ja'
  },
  axios: {}
}
