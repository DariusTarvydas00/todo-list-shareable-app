FROM node:16-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm cache clean --force

WORKDIR /node/app

EXPOSE 3000

CMD ["npm", "start"]