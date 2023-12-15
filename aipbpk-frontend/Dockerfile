FROM node:16-alpine as builder

ENV NODE_ENV=production

WORKDIR /client

COPY package.json .
COPY package-lock.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm","start"]

# RUN npm run build

# FROM nginx 
# EXPOSE 3000
# COPY ./nginx/aipbpk.conf /etc/nginx/conf.d/aipbpk.conf
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# #
# # COPY ./certs/devopsbyexample.pem /etc/nginx/certs/devopsbyexample.pem
# # COPY ./certs/devopsbyexample-key.pem /etc/nginx/certs/devopsbyexample-key.pem
# #
# COPY --from=builder client/build /usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]