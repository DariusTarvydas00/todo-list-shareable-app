FROM node:lts-alpine3.14 AS base

FROM base AS builder
WORKDIR /node
COPY package*.json ./
RUN npm ci && npm cache clean --force
WORKDIR /node/app
EXPOSE 3000
CMD ["npm", "start"]