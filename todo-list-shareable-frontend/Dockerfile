FROM node:lts-alpine3.14 AS build-stage
WORKDIR /usr/app/vue
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production
COPY --from=build-stage /usr/app/vue ./usr/share/nginx/html
EXPOSE 80
EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;" ]

#FROM node:lts-alpine3.14 as build-stage
#WORKDIR /app/vue/
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/vue/dist/ /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
#FROM node:lts-alpine3.14 AS base
#RUN npm install -g http-server
#
#FROM base AS development
#WORKDIR /usr/app/vue
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
#FROM nginx:stable-alpine AS production
#WORKDIR /usr/app/vue
#COPY --from=development /usr/app/vue ./
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


#FROM node:lts-alpine3.14 AS base
#RUN npm install -g http-server
#
#FROM base AS development
#WORKDIR /usr/app/vue
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#CMD ["npm", "run", "serve"]
#
#FROM development AS production
#WORKDIR /usr/app/vue
#COPY --from=development /usr/app/vue ./
#EXPOSE 80
#CMD [ "http-server", "dist" ]

# docker-build -t nest
# docker run nest

# Base stage
# ---------------------------------------
#FROM node:16-alpine3.14 AS base
#WORKDIR /node
#RUN chown node:node /node
#USER node
#
## Development stage
## ---------------------------------------
#FROM base AS development
#ENV SERVER_PORT=8081
#ENV PATH /node/node_modules/.bin:$PATH
#EXPOSE $SERVER_PORT 9230
#COPY --chown=node:node package*.json ./
#RUN npm install
#WORKDIR npm install
#WORKDIR/app
#COPY . .
#ENV NODE_ENV=rpoduction
#CMD ["npm","start"]
##RUN \
##  NODE_ENV=development && \
##  npm ci && \
##  npm cache clean --force
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
#RUN \
#  npm run test && \
#  npm run lint
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