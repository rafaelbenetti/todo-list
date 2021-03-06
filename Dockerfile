FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY bower.json /usr/src/app/

RUN npm install
RUN npm install -g nodemon bower gulp
RUN bower install --allow-root 

# Bundle app source
COPY . /usr/src/app 

EXPOSE 3000
CMD ["npm", "start"]