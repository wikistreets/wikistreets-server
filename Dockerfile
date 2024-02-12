# in Docker, it is common to base a new image on a previously-created image
FROM node:21.6.1-bullseye

# Set the working directory in the image
WORKDIR /app

# install dependencies into the image - doing this first will speed up subsequent builds, as Docker will cache this step
COPY package*.json ./
RUN npm install

# the ADD command is how you add files from your local machine into a Docker image
# Copy the current directory contents into the container at /app
ADD . .

# expose the port that the server is running on... default is 10520, but can be modified in .env
EXPOSE 10520

# Launch server when the container launches
CMD [ "npm", "start"]
