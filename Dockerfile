FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM alpine:latest

RUN mkdir -p /var/www/html

COPY --from=build /usr/src/app/build /var/www/html

VOLUME /var/www/html
