FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 5000
ENV MONGO_URL "mongodb://mongo/todos"

EXPOSE 5000

CMD [ "npm", "start" ]
