FROM node:12.2.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./ /app

CMD ["npm","run","test"] 

EXPOSE 3000
