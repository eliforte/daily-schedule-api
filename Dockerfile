FROM node:alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn config set unsafe-perm true

RUN yarn add typescript -g

RUN yarn add ts-node -g

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 5050

CMD ["yarn", "start"]