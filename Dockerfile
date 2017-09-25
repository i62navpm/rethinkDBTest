FROM node:8
LABEL maintainer="Manuel Navarro <manuelnavarro1987@gmail.com>"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

ENV PORT 8080