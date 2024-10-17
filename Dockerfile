ARG NODE_VERSION=20.5.1
FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
RUN npm i
USER node
EXPOSE 3000
CMD node ./src/index.js