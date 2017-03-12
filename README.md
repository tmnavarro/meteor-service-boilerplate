# Meteor micro service boilerplate [![Build Status](https://travis-ci.org/RedLeap/meteor-service-boilerplate.svg?branch=master)](https://travis-ci.org/RedLeap/meteor-service-boilerplate)

A common way of creating, interfacing and testing micro services.

## Testing
Dependency injection allows the tests on the micro service to run very quickly
in development and within a CI workflow, this is done my injecting dependencies
like `Meteor`, `Crud` and any other imports that are exported at runtime of the
meteor application.

 So please follow this rule and expect the way you code to change.

## Build
To create a docker image run `make build`

## docker-compose

```yaml

version: '2'

services:

  ms-boilerplate:
    image: redleap/ms-boilerplate
    environment:
      - PORT=3000
      - ROOT_URL=http://localhost:3000
      - MONGO_URL=mongodb://mongo:27017/ms-boilerplate
    depends_on:
      - mongo
    ports:
      - 3000:3000

  mongo:
    image: mongo:3.2
    volumes:
      - ./data/db:/data/db

```

## Submodules
 - [RedLeap/meteor-service-core](https://github.com/RedLeap/meteor-service-core)
 - [centiq:meteor-crud](https://github.com/Centiq/meteor-crud)
