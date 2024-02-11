# Contributor guidelines

## Local setup

The wikistreets server is a classic node.js/express app with a MongoDB database. At a glance, you will need to do the following steps:

### Clone this repository

You know how to do that.

### Set up a MongoDB database

Either install MongoDB locally or use a hosted service such as MongoDB Atlas.

### Install Node.js and npm

Install `node.js`, `npm`, and `npx` on your machine, if you haven't already.

### Install dependencies

Go into the project directory and run `npm install`

### Configuration and environment variables

This project stores configuration options in a file named `.env`. For security reasaons, that file is not stored in version control. The file named `env.example` shows the structure of that file. Copy the contents of the example file into a new file named `.env` in the main project directory and plug in your own database and authentication settings into that file.

### Run the server

The server currently runs by default on port `10520`, but the port is customizable in `.env`. Assuming you have installed `nodemon` (if not, run `npm install -g nodemon` or `sudo npm install -g nodemon`), start up the server locally:

```
npm run start-dev
```

On a production server, conventional wisdom says to use `pm2` rather than `nodemon`. Install `pm2` (i.e. `npm install -g pm2` or `sudo npm install pm2`) and run the server:

```
pm2 node index.js
```

### Expose your server via https

The web browser geolocation used by the app typically requires a 'secure' HTTPS connection. Your local machine probably does not support HTTPS. To allow HTTPS connections from the public web to your wikistreets instance running on port `10520` of your local machine, use a service such as [ngrok](https://ngrok.com/) - install it and then...

```
ngrok http 10520
```

This will output the public HTTPS web address you can use to try out the web app from your web browser.

### Try out the server with Postman

Use [Postman](https://www.postman.com/) to test the server. An importable Postman settings file is included in the repository with the routes and example requests configured.

## Workflow

This project follows a standard forking workflow:

- Fork this repository
- Make changes to your fork
- issues a pull request to this repository to have your changes reviewed and merged

All changes should address a particular Issue (feature request or bug report) listed in the Issue tracker.
