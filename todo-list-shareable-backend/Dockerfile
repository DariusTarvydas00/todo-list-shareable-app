FROM node:lts-alpine3.14 AS base

FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
EXPOSE 3000
CMD ["npm", "start"]