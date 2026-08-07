FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

# Eliminar config default
RUN rm /etc/nginx/conf.d/default.conf

# Copiar config nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8074

CMD ["nginx", "-g", "daemon off;"]