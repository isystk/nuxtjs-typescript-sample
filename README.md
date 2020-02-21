Nuxt.js TypeScript Vuetify サンプル
====

## Description

Nuxt.js、TypeScript、Vuetify を利用したサンプルです。

## Demo
https://demo.isystk.com/nuxtjs/

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

## Licence

[MIT](https://github.com/isystk/nuxtjs_typescript_vuetify/LICENCE)

## Author

[isystk](https://github.com/isystk)


