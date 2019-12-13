Nuxt.js TypeScript Vuetify サンプル
====

Nuxt.js、TypeScript、Vuetify を利用したサンプルです。

## Description

Nuxt.js、TypeScript、Vuetify を学習する目的で、自分のポートフォリオを作成してみました。

## Demo
http://isystk.github.io/profile/

## VS. 

## Requirement

* Nuxt.js@2.10.2
* Vue.js@2.6.10 
* Vuetify@2.1.6 

## Usage

``` bash
# Nginxを起動する
$ docker-compose -f ./docker/docker-compose.yml up -d nginx

# Nginxを停止する
$ docker-compose -f ./docker/docker-compose.yml stop nginx

# デプロイ用のDockerImageを作成する
$ docker-compose -f ./docker/docker-compose.yml build --no-cache webapp
```

## Install

``` bash
# 環境構築
$ nodebrew install v12.13.0
$ nodebrew use v12.13.0

# yarn(パッケージマネージャ)のインストール
$ npm install -g yarn

# 依存モジュールのインストール
$ yarn install

# ビルド&起動
$ yarn run dev
$ curl http://localhost:3000/
```

## Contribution

Vue.js  
[https://v1-jp.vuejs.org/guide/](https://v1-jp.vuejs.org/guide/)  
  
Vuetify  
[https://vuetifyjs.com/ja/getting-started/quick-start](https://vuetifyjs.com/ja/getting-started/quick-start)  
[https://codepen.io/mzoks/pen/JpqwVO](https://codepen.io/mzoks/pen/JpqwVO)  
  
DMI  
[https://cdn.materialdesignicons.com/4.5.95/](https://cdn.materialdesignicons.com/4.5.95/)  
  
SASS  
[https://sass-lang.com/documentation](https://sass-lang.com/documentation)  

TypeScript  
[仕事で使えるTypeScript](https://future-architect.github.io/typescript-guide/index.html)　 

Nuxt.js
[typescript-nuxtjs-boilerplate-docs](https://typescript-nuxtjs-boilerplate-docs.netlify.com/#/nuxt/examples)

## Licence

[MIT](https://github.com/isystk/nuxtjs_typescript_vuetify/LICENCE)

## Author

[isystk](https://github.com/isystk)


