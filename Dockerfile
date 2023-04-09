# Utilizamos una imagen de Node.js como base
FROM node:14

# Definimos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos el archivo package.json e instalamos las dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Exponemos el puerto de la API
EXPOSE 3000

# Iniciamos el consumidor de Kafka y la API
CMD ["npm", "run", "start"]