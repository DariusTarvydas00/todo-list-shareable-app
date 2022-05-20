FROM node:18-alpine3.14

WORKDIR /app

COPY ./package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE 8081

CMD ["npm", "run", "serve"]
