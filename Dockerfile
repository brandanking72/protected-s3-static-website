FROM node:20-alpine

RUN apk update && apk add zip
RUN apk add bash
RUN npm i -g typescript
RUN npm i -g esbuild
