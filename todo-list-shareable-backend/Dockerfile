FROM node:16-alpine3.14

WORKDIR /app

COPY package*.json ./app/

RUN npm ci && npm cache clean --force

EXPOSE 3000

CMD ["npm", "start"]