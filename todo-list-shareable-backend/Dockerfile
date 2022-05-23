FROM node:lts-alpine3.14 AS base

FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force
CMD ["npm", "start"]