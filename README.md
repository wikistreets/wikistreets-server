# Wikistreets server

Back-end of wikistreets, built with express.js.

## Installation

- `npm install`
- set up `.env` file based on `example.env` to point to a mongodb instance

## Run

### Locally

To run locally:

- `npm start-dev` to start the server

### Docker

To run within a Docker container:

- `docker build -t wikistreets-server .` to build the image.
- `docker run --name wikistreets_backend -p 10520:10520 wikistreets-server` to start the server in a container instance, where `10520` is the port specified in `.env`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.
