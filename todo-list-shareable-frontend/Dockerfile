FROM node:18-alpine3.14 AS base

FROM base AS development

WORKDIR /node
COPY package*.json ./
RUN \
  NODE_ENV=development && \
  npm ci && \
  npm cache clean --force

WORKDIR /node/app

EXPOSE 8081
CMD ["npm", "serve"]

FROM base AS source

WORKDIR /node
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .

FROM source AS test

COPY --from=development /node/node_modules /node/node_modules
RUN npm run test && npm run lint

FROM source AS production

EXPOSE 3000
CMD [ "npm", "start" ]