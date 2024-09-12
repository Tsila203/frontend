# Utiliser une image Node.js pour le front-end
FROM node:14

# Installer les dépendances
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copier l'application
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
