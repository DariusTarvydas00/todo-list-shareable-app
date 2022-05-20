FROM node:18-alpine3.14 AS base

FROM base AS development

WORKDIR /node
COPY package*.json ./
RUN \
  NODE_ENV=development && \
  npm ci && \
  npm cache clean --force

WORKDIR /node/app

EXPOSE 3000
CMD ["npm", "start"]

WORKDIR /node
COPY package*.json ./
RUN \
  NODE_ENV=development && \
  npm ci && \
  npm cache clean --force

FROM source AS test

COPY --from=development /node/node_modules /node/node_modules
RUN npm run test && npm run lint

FROM source AS production

EXPOSE 3000
CMD [ "npm", "start" ]