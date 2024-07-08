FROM node:buster-slim

ARG SEARXNG_API_URL
ENV SEARXNG_API_URL=${SEARXNG_API_URL}

WORKDIR /home/engine

COPY src /home/engine/src

COPY tsconfig.json /home/engine/
COPY .env /home/engine/
COPY package.json /home/engine/
COPY package-lock.json /home/engine/

# RUN npm install -g pnpm
RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
