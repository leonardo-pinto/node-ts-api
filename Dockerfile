FROM node:12
WORKDIR /usr/src/node-ts-clean-api
COPY ./package.json .
RUN npm install --only=prod
