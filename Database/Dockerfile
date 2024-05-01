FROM node:18-alpine

WORKDIR /database

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "db:run" ]