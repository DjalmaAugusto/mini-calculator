FROM node:alpine

WORKDIR /usr/app

# Install app dependencies
COPY package.json /usr/app/
RUN npm install

COPY . .

EXPOSE 3000

CMD npm start