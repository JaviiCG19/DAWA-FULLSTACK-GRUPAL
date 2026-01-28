# Frontend Next.js Dockerfile para Desarrollo
FROM node:20-alpine

WORKDIR /app

# Instalar dependencias
RUN apk add --no-cache libc6-compat

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Variables de entorno
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Comando para desarrollo
CMD ["npm", "run", "dev"]
