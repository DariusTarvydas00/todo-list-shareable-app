FROM node:lts-alpine3.14 AS base
RUN npm install -g http-server

FROM base AS development
WORKDIR /usr/app/vue
ENV PATH  /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install && npm install @vue/cli@3.7.0 -g
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]

FROM development AS production
WORKDIR /usr/app/vue
COPY --from=development /usr/app/vue .
CMD [ "http-server", "dist" ]

# docker-build -t nest
# docker run nest