# Use the latest Node.js version
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy and install necessary dependencies
COPY package.json .
COPY package-lock.json .

RUN npm ci

# Copy the application
COPY . .

# Start the application
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]