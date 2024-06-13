# Use an official Node.js runtime as a parent image
FROM node:12.2.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy both package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy the rest of your application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000:3000

# Command to run your application
# CMD ["node", "index.js"]
CMD ["pm2-runtime", "start", "index.js"]
