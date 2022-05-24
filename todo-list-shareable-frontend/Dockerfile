FROM node:lts-alpine3.14 AS base

FROM base AS development
RUN npm install -g http-server
WORKDIR /node
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM development AS production
WORKDIR /node
COPY --from=development /node .
EXPOSE 8082
CMD [ "http-server", "dist" ]

# docker-build -t nest
# docker run nest