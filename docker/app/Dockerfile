  
FROM node:10-slim
LABEL maintainer="devops@b-eee.com"
EXPOSE 80
RUN apk update && apk add --no-cache make git nodejs
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build
RUN npm run serve