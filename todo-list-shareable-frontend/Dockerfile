FROM node:lts-alpine3.14 AS base

FROM base AS development
RUN npm install -g http-server
WORKDIR /usr/app/vue
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM development AS production
WORKDIR /usr/app/vue
COPY --from=development /usr/app/vue .
EXPOSE 8082
CMD [ "http-server", "dist" ]

# docker-build -t nest
# docker run nest