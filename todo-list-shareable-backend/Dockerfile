FROM node:lts-alpine3.14 AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build

FROM node:lts-alpine3.14 AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/src/main"]

#FROM node:lts-alpine3.14
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
##
#FROM base AS development
#WORKDIR /app/nestjs
#COPY package*.json ./
#


#FROM node:lts-alpine3.14
#WORKDIR /app/nestjs
#COPY /dist/ ./dist/
#CMD ["node", "dist/src/main.js"]


#FROM node:lts-alpine3.14
#WORKDIR /app
#COPY --from=builder /app ./
#CMD ["npm", "run", "start:prod"]

#FROM node:lts-alpine3.14 AS development
#RUN mkdir /app
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
#FROM node:lts-alpine3.14 AS production
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#WORKDIR /app
#COPY package*.json ./
#RUN npm install --only=prodcution
#COPY ./src .
#COPY --from=development /app/ ./dist
#CMD ["node", "dist/main"]
#
##FROM node:lts-alpine3.14 AS base
##
##FROM base AS development
##WORKDIR /usr/app/nestjs
##COPY package*.json ./
##RUN npm install
##COPY . .
##RUN npm run build
##CMD ["npm","run:dev"]
##
##FROM development AS production
##WORKDIR /usr/app/nestjs
##COPY --from=development /usr/app/nestjs ./
##CMD ["node", "dist/main"]
##
### docker-build -t nest
### docker run nest

# Build stage
# ---------------------------------------
#FROM node:14.17-alpine3.13 AS build
#
#ARG NPM_TOKEN
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#
#WORKDIR /node
#RUN chown node:node /node
#USER node
#
#COPY --chown=node:node package.json yarn.lock ./
#
#RUN \
#  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc && \
#  npm ci && \
#  npm cache clean --force && \
#  rm .npmrc
#
## Base stage
## ---------------------------------------
#FROM node:14.17-alpine3.13 AS base
#
## This get shared across later stages
#WORKDIR /node
#RUN chown node:node /node
#USER node
#
## Development stage
## ---------------------------------------
#FROM base AS development
#
#ENV SERVER_PORT=3000
#ENV PATH /node/node_modules/.bin:$PATH
#EXPOSE $SERVER_PORT 9229
#
#COPY --chown=node:node package*.json ./
#
#RUN \
#  NODE_ENV=development && \
#  npm ci && \
#  npm cache clean --force
#
#WORKDIR /node/app
#
#CMD [ "node", "./bin/www" ]
#
## Source stage
## ---------------------------------------
#FROM base AS source
#
#WORKDIR /node/app
#RUN chown node:node /node/app
#COPY --chown=node:node --from=build /node/node_modules /node/node_modules
#COPY --chown=node:node . .
#
## Test stage
## ---------------------------------------
#FROM source AS test
#
#ARG NODE_ENV=development
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /node/node_modules/.bin:$PATH
#
#COPY --chown=node:node --from=development /node/node_modules /node/node_modules
#
#RUN \
#  npm run test && \
#  npm run lint
#
## Production stage
## ---------------------------------------
#FROM source AS production
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /node/node_modules/.bin:$PATH
#ENV SERVER_PORT=3000
#EXPOSE $SERVER_PORT
#
#CMD [ "node", "./bin/www" ]

#FROM node:16-alpine3.14 AS base
#
#FROM base AS development
#
#ENV SERVER_PORT=3000
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /app/node_modules/.bin:$PATH
#EXPOSE $SERVER_PORT 9229
#
#COPY --chown=node:node package*.json ./
#
#RUN \
#  NODE_ENV=development && \
#  npm ci && \
#  npm cache clean --force
#
#WORKDIR /node/app
#
#CMD [ "node", "./bin/www" ]
#
#FROM base AS source
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#
#WORKDIR /node
#COPY --chown=node:node package*.json ./
#
#RUN npm ci && npm cache clean --force
#
#WORKDIR /node/app
#RUN chown node:node /node/app
#COPY --chown=node:node . .
#
#FROM source AS test
#
#ARG NODE_ENV=development
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /node/node_modules/.bin:$PATH
#
#COPY --chown=node:node --from=development /node/node_modules /node/node_modules
#
#RUN npm run test
#
#FROM source AS production
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /node/node_modules/.bin:$PATH
#ENV SERVER_PORT=3000
#
#EXPOSE $SERVER_PORT
#
#CMD [ "node", "./bin/www" ]
#
## Build stage
##FROM base AS production
##ARG NODE_ENV=production
##ENV NODE_ENV=${NODE_ENV}
##WORKDIR /usr/src/app
##COPY --from=development /usr/src/app/ .
##EXPOSE 3000
##CMD ["node", "dist/main"]
#
### Development stage
### ---------------------------------------
##FROM base AS development
##ENV SERVER_PORT=3000
##ENV PATH /node/node_modules/.bin:$PATH
##EXPOSE $SERVER_PORT 9229
##COPY --chown=node:node package*.json ./
##RUN \
##  NODE_ENV=development && \
##  npm ci && \
##  npm cache clean --force
##WORKDIR /node/app
##CMD [ "nodemon" ]
##
### Source stage
### ---------------------------------------
##FROM base AS source
##ARG NODE_ENV=production
##ENV NODE_ENV=${NODE_ENV}
##WORKDIR /node
##COPY --chown=node:node package*.json ./
##RUN \
##  npm ci --no-optional && \
##  npm cache clean --force
##COPY --chown=node:node . .
##
### Test stage
### ---------------------------------------
##FROM source AS test
##ARG NODE_ENV=development
##ENV NODE_ENV=${NODE_ENV}
##ENV PATH /node/node_modules/.bin:$PATH
##COPY --chown=node:node --from=development /node/node_modules /node/node_modules
##RUN npm run test
##
### Production stage
### ---------------------------------------
##FROM source AS production
##ARG NODE_ENV=production
##ENV NODE_ENV=${NODE_ENV}
##ENV PATH /node/node_modules/.bin:$PATH
##ENV SERVER_PORT=3000
##EXPOSE $SERVER_PORT
##CMD [ "node", "./bin/www" ]

# Base stage
# ---------------------------------------
# Creating a base image for quick pull from local machine
#FROM node:18-alpine3.14 AS base
#
## This get shared across later stages
## Setting Working directory inside the container
#WORKDIR /node
## Assigning
#RUN chown node:node /node
#USER node
#
## Development stage
## ---------------------------------------
#FROM base AS development
#
#ENV SERVER_PORT=3000
#ENV PATH /node/node_modules/.bin:$PATH
#EXPOSE $SERVER_PORT 9229
#
#COPY --chown=node:node package*.json ./
#
#RUN \
#  NODE_ENV=development && \
#  npm ci && \
#  npm cache clean --force
#
#WORKDIR /node/app
#
#CMD [ "nodemon" ]
#
## Source stage
## ---------------------------------------
#FROM base AS source
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#
#WORKDIR /node
#COPY --chown=node:node package*.json ./
#
#RUN \
#  npm ci --no-optional && \
#  npm cache clean --force
#
#COPY --chown=node:node . .
#
## Test stage
## ---------------------------------------
#FROM source AS test
#
#ARG NODE_ENV=development
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /node/node_modules/.bin:$PATH
#
#COPY --chown=node:node --from=development /node/node_modules /node/node_modules
#
#RUN \
#  npm run test && \
#  npm run lint
#
## Production stage
## ---------------------------------------
#FROM source AS production
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#ENV PATH /node/node_modules/.bin:$PATH
#ENV SERVER_PORT=3000
#
#EXPOSE $SERVER_PORT
#
#CMD [ "node", "./bin/www" ]