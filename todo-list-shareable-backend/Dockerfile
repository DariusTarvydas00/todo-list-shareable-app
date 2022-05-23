FROM node:16-alpine3.14 AS base

FROM base AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Build stage
FROM base AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY --from=development /usr/src/app/ .
EXPOSE 3000
CMD ["node", "dist/main"]

## Development stage
## ---------------------------------------
#FROM base AS development
#ENV SERVER_PORT=3000
#ENV PATH /node/node_modules/.bin:$PATH
#EXPOSE $SERVER_PORT 9229
#COPY --chown=node:node package*.json ./
#RUN \
#  NODE_ENV=development && \
#  npm ci && \
#  npm cache clean --force
#WORKDIR /node/app
#CMD [ "nodemon" ]
#
## Source stage
## ---------------------------------------
#FROM base AS source
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#WORKDIR /node
#COPY --chown=node:node package*.json ./
#RUN \
#  npm ci --no-optional && \
#  npm cache clean --force
#COPY --chown=node:node . .
#
## Test stage
## ---------------------------------------
#FROM source AS test
#ARG NODE_ENV=development
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /node/node_modules/.bin:$PATH
#COPY --chown=node:node --from=development /node/node_modules /node/node_modules
#RUN npm run test
#
## Production stage
## ---------------------------------------
#FROM source AS production
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /node/node_modules/.bin:$PATH
#ENV SERVER_PORT=3000
#EXPOSE $SERVER_PORT
#CMD [ "node", "./bin/www" ]