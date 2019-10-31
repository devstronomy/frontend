FROM node:12

WORKDIR /app

COPY package.json /app/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]
