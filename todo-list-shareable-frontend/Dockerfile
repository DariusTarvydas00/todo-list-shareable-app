FROM node:lts-alpine3.14 as build-stage
WORKDIR /app/vue/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/vue/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
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