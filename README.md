Nuxt.js TypeScript Vuetify サンプル
====

Nuxt.js、TypeScript、Vuetify を利用したサンプルです。

## Description

Nuxt.js、TypeScript、Vuetify を学習する目的で、自分のポートフォリオを作成してみました。

## Demo

## VS. 

## Requirement

* Nuxt.js@2.10.2
* Vue.js@2.6.10 
* Vuetify@2.1.6 

## Usage

``` bash
# ビルド&起動
$ yarn run dev
http://localhost:3000/

# ビルドだけ、起動だけ
$ yarn run build
$ yarn start

# 成果物の生成
$ yarn run generate

# ESR に保存するためのDockerImageの作成
$ docker build -t portfolio .
# 作成したDockerImageを実行してみて動作確認
$ docker run -it -p 3000:3000 portfolio

```

## Install

``` bash
# 環境構築
$ nodebrew install v12.13.0
$ nodebrew use v12.13.0

$ npm install -g yarn

$ yarn install
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

## Licence

[MIT](https://github.com/isystk/nuxtjs_typescript_vuetify/LICENCE)

## Author

[isystk](https://github.com/isystk)


