FROM node:18-alpine
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install project dependencies
RUN npm install
# Copy the rest of the application files
COPY . .
# Build the application (optional, if you're building a static app with Tailwind)
RUN npm run build
# Expose the port your app runs on (default is 3000 for many Node.js apps)
EXPOSE 3000
# Command to run the application
CMD ["npm", "start"]