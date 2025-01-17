# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port used by the service
EXPOSE 5002 
 # Change this to the respective service port (5001, 5002, 5003)

# Command to start the service
CMD ["node", "index.js"]
