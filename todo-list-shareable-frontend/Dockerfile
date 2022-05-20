FROM node:18-alpine As development

WORKDIR /app/vue

COPY ./package*.json ./

RUN npm install --only=development

Copy . .

RUN npm run build

FROM node:18-alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /app/vue/dist ./dist

CMD ["node", "dist/main"]