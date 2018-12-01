FROM node:9

RUN mkdir /app
ADD . /app

WORKDIR /app
