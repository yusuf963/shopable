FROM node:14.4-alpine as builder
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html