FROM mhart/alpine-node:9

RUN mkdir /app
ADD . /app

WORKDIR /app/ui
RUN npm install && npm run build

WORKDIR /app/api
RUN npm install && npm run build

WORKDIR /app
