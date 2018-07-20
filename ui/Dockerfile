FROM mhart/alpine-node:9
RUN mkdir www/
WORKDIR www/
ADD . .
RUN npm install && npm run build
RUN npm install -g serve
CMD serve -s build
