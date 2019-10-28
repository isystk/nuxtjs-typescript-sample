# Nodeイメージの取得
FROM node:12.13.0

ENV HOST 0.0.0.0

# ワーキングディレクトリの作成
RUN mkdir -p /app
COPY . /app
# ワーキングディレクトリの指定
WORKDIR /app

# アプリのインストール
RUN npm install -g yarn
RUN yarn install

# アプリのビルド
RUN yarn run build

EXPOSE 3000
CMD ["npm", "run", "start"]
