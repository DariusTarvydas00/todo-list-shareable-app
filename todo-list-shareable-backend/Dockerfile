FROM node:lts-alpine3.14 AS base

FROM base AS development
WORKDIR /usr/app/nestjs
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM development AS production
WORKDIR /usr/app/nestjs
COPY --from=development /usr/app/nestjs .
EXPOSE 8081
CMD ["node", "dist/main"]

# docker-build -t nest
# docker run nest