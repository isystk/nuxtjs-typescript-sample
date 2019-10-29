# Nodeイメージの取得
FROM node:12.13.0

MAINTAINER isystk

# ワーキングディレクトリの作成
RUN mkdir -p /app
COPY . /app
WORKDIR /app

# アプリのインストール
RUN npm install -g yarn
RUN yarn install

# アプリのビルド
RUN yarn run build

EXPOSE 3000
CMD ["yarn", "start"]
