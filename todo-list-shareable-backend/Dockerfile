FROM node:lts-alpine3.14 AS base

FROM base AS builder
WORKDIR /node
COPY package*.json ./
RUN npm ci && npm cache clean --force
WORKDIR /node/app
CMD ["npm", "start"]

FROM builde AS development