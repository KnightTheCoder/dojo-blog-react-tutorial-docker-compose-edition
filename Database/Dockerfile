FROM node:lts-alpine

WORKDIR /database

RUN chown node:node ./
USER node

COPY package*.json .

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "db:run" ]