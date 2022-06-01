FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN yarn config set unsafe-perm true

RUN yarn add typescript -g

RUN yarn add ts-node -g

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 5050

CMD ["yarn", "start"]