# Base stage
FROM node:16-alpine3.14 AS base

# Development stage
FROM base AS development

WORKDIR /app
COPY package*.json ./
RUN ls -al
RUN NODE_ENV=development && npm ci && npm cache clean --force
RUN ls -al
COPY package*.json ./node/app/
WORKDIR /node/app
EXPOSE 3000
CMD ["npm", "start"]

# Source stage
FROM base AS source
WORKDIR /node
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .

# Test stage
FROM source AS test
COPY --from=development /node/node_modules /node/node_modules
RUN npm run test && npm run lint

# Production stage
FROM source AS production
EXPOSE 3000
CMD ["npm","start"]