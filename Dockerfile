FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN npm init -y
RUN npm install nodemailer

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY /usr/src/app/package*.json ./
COPY sendmail.js  /usr/src/app
COPY index.html /usr/src/app
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
#COPY . .

EXPOSE 8080
CMD [ "node", "sendmail.js" ]