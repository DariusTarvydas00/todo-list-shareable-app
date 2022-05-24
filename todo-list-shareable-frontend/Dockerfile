FROM node:lts-alpine3.14 AS base
RUN npm install -g http-server

FROM base AS development
WORKDIR /app
ENV PATH  /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm install && npm install @vue/cli@3.7.0 -g
CMD ["npm", "run", "serve"]

FROM development AS production
WORKDIR /app
COPY --from=development /app .
EXPOSE 8082
CMD [ "http-server", "dist" ]

# docker-build -t nest
# docker run nest