FROM node:lts-alpine

WORKDIR /database

COPY package*.json .

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE 8000

RUN chown node:node ./*
USER node

CMD [ "npm", "run", "db:run" ]