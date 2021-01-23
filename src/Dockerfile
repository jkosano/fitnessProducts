# #specify baseimage
# FROM node:alpine

# #set working directory
# WORKDIR /usr/app

# #install dependencies
# COPY ./package.json ./
# RUN npm install
# COPY ./ ./

# #RUN npm install


# #default command
# #CMD ["npm", "run", "build"]
# CMD ["npm", "run", "start"]


#Notice how we don't have docker volumes in this production build (don't need it)
FROM node:alpine 
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
# RUN apt-get update
# RUN apt-get install vim
RUN npm run build

#to specify a second build phase, just use "FROM" 
FROM nginx
#copy items from build folder crated from 1st phase (indicated as '0') to below path
COPY --from=0 /app/build /usr/share/nginx/html



