# Base image for Node.js
FROM node:alpine

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 for the server
EXPOSE 3000

# Start the server
# TODO: use production ready option rather than npm start
CMD ["npm", "start"]
