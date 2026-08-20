FROM node:22

WORKDIR /

COPY ./package.json ./package.json
COPY ./bin.ts ./bin.ts
COPY ./tsconfig.json ./tsconfig.json
COPY ./index.ts ./index.ts

RUN npm install

CMD ["node","bin.ts"]