# Specify the node base image version node:<version>
FROM node:lts-alpine3.15 as base

# Application default port 
EXPOSE 3000

# Set the app work directory
WORKDIR /home/node/app

# Copy the package json
COPY package*.json ./

# Install the needed packages
RUN npm i

# Copy all the application files
COPY . .