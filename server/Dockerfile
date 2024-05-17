FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3525

CMD [ "npm", "run", "dev" ]