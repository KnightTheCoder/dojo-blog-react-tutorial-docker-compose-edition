FROM node:lts-alpine AS base

WORKDIR /webapp

COPY package*.json .

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE 3000


FROM base AS development

RUN chown node:node ./*
USER node

CMD [ "npm", "run", "start" ]


FROM base AS production

RUN <<EOF
npm run build
npm install serve
chown node:node ./
EOF

USER node

CMD [ "npx", "serve", "-s", "build" ]