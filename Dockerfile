FROM node:15.5.1-alpine3.12

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm i

# Bundle app source
COPY . .

# Bind to port 3000
ENV PORT 3000
EXPOSE 3000

ENV NODE_ENV ecs

CMD [ "npm", "start" ]