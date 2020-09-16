FROM node:12-alpine
WORKDIR /devel
COPY . .
RUN npm install -cowsay

RUN npm run build
CMD ["npm","run", "start"]