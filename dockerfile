FROM node:12.14.0

COPY miniNode /data/miniNode

WORKDIR /data/miniNode

RUN npm install -g webpack nodemon \
    && npm install

EXPOSE 80 443

CMD node index.js