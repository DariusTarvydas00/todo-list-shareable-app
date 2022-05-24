FROM node:lts-alpine3.14 AS base
RUN npm install -g http-server

FROM base AS development
WORKDIR /app/vue
ENV PATH  /app/node_modules/.bin:$PATH
COPY package*.json /app/vue
RUN npm install && npm install @vue/cli@3.7.0 -g
CMD ["npm", "run", "serve"]

FROM development AS production
WORKDIR /app/vue
COPY --from=development /app/vue .
EXPOSE 8082
CMD [ "http-server", "dist" ]

# docker-build -t nest
# docker run nest