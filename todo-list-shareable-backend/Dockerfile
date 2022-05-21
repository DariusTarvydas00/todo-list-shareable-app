# Base stage
FROM node:16-alpine3.14 AS base

# Development stage
FROM base AS development
ENV SERVER_PORT=3000
ENV PATH /node/node_modules/.bin:$PATH
EXPOSE $SERVER_PORT 9229
WORKDIR /node
COPY package*.json ./
RUN \
    NODE_ENV=development && \
    npm ci && \
    npm cache clean --force \
WORKDIR /node/app
EXPOSE 3000
CMD ["npm", "start"]

# Source stage
FROM base AS source
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
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