FROM node:wheezy
MAINTAINER wanghao <wanghao@ninghao.net>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./app/package.json /usr/src/app/
RUN npm install

COPY ./app /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
