FROM node:alpine 
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#second build phase to transfer items created for alpine and transfer to nginx path 
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html