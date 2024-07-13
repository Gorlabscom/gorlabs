FROM node:buster-slim

ARG SEARXNG_API_URL
ENV SEARXNG_API_URL=${SEARXNG_API_URL}

WORKDIR /home/engine

COPY src /home/engine/src

COPY tsconfig.json /home/engine/
COPY config.toml /home/engine/
COPY package.json /home/engine/
COPY package-lock.json /home/engine/


RUN sed -i "s|SEARXNG = \".*\"|SEARXNG = \"${SEARXNG_API_URL}\"|g" /home/engine/config.toml

RUN npm install
RUN npm run build

CMD [ "npm","start" ]
