# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container
COPY . .

# Install the dependencies
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Define the command to run the app
CMD ["node", "server.js"] 
