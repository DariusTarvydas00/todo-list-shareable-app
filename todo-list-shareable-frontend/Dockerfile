FROM node:lts-alpine3.14 AS base
RUN npm install -g http-server

FROM base AS development
WORKDIR /usr/app/vue
COPY package*.json ./
RUN npm install
COPY . .
RUN npm build
CMD ["npm", "run", "serve"]

FROM development AS production
WORKDIR /usr/app/vue
COPY --from=development /usr/app/vue ./
EXPOSE 80
CMD [ "http-server", "dist" ]

# docker-build -t nest
# docker run nest