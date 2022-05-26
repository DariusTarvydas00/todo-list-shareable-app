FROM node:lts-alpine3.14
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "dist/main"]


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