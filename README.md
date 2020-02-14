nuxtjs-sample
====

## Description

Nuxt.js、TypeScript、Vuetify を利用したサンプルです。

## Demo

## VS. 

## Requirement

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
$ yarn install
$ yarn run dev
$ curl http://localhost:3000/
```

## Contribution

## Licence

[MIT](https://github.com/isystk/ecr-sample/LICENCE)

## Author

[isystk](https://github.com/isystk)


