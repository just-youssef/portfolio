FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better for caching)
COPY package*.json ./
COPY lerna.json ./
COPY packages/client/package.json packages/client/
COPY packages/server/package.json packages/server/

# Install dependencies
RUN npm install

# Copy rest of the files
COPY . .

# Build the app
RUN npm run build

# Start command
CMD ["npm", "start"]
