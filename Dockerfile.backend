FROM node:22

WORKDIR /

COPY ./package.json ./package.json
COPY ./bin.js ./bin.js
COPY ./index.js ./index.js

RUN npm install

CMD ["node","bin.js"]