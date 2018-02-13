FROM node:9.5.0 AS build

RUN npm install -g yarn 
COPY . /usr/src/
WORKDIR /usr/src/
RUN yarn install
RUN yarn test
RUN yarn run build --production


FROM node:alpine

CMD ["serve", "-s", "/usr/src/"]
EXPOSE 5000
COPY --from=build /usr/src/build /usr/src/
WORKDIR /usr/src/
RUN npm install -g serve