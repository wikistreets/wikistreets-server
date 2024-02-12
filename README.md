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

... or ...

Use docker compose to launch both the back-end and a MongoDB instance in containers.

- `docker compose up --force-recreate --build` ... add `-d` to run in detached/background mode.
- and then `docker compose down` in a separate terminal window to stop the containers when done.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.
