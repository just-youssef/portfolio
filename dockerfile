FROM node:20-alpine

WORKDIR /app

# Update Alpine packages to avoid vulnerabilities
RUN apk update && apk upgrade --no-cache

# Copy root package files
COPY package*.json lerna.json ./

# Copy package.json files for all workspaces (for caching)
COPY packages/client/package.json packages/client/
COPY packages/server/package.json packages/server/

# Install dependencies and bootstrap Lerna
RUN npm install -g lerna
RUN npm install
RUN lerna bootstrap

# Copy the rest of the source code
COPY . .

# Build the client package
RUN npm run build

# Start the app
CMD ["npm", "start"]
