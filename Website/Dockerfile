FROM node:lts-alpine AS base

WORKDIR /webapp

RUN chown node:node ./
USER node

COPY package*.json .

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE $WEBSITE_PORT

FROM base AS development

CMD [ "npm", "run", "start" ]


FROM base AS production

USER node

RUN <<EOF
npm run build
npm install serve
chown node:node ./
EOF

CMD [ "npx", "serve", "-s", "build" ]