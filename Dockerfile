FROM node:12

WORKDIR /app
ADD package.json /app
RUN yarn


