FROM node:10.15.3-alpine AS build
RUN apk add --update --no-cache python make g++
WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run lint
RUN npm run build

FROM build AS prod-dependencies
RUN npm prune --production

FROM node:10.15.3-alpine as production
WORKDIR /api
COPY --from=build /api/dist ./
COPY --from=prod-dependencies /api/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "./server.js"]
