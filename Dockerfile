FROM node:20-alpine

WORKDIR /app

COPY package*.json .
COPY tsconfig*.json .

RUN npm install

COPY . .

WORKDIR /app/server
COPY package*.json .

RUN npm install

COPY server/. .

EXPOSE 5173 3525

CMD [ "npm", "run", "start" ]