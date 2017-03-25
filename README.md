# Meteor micro service boilerplate [![Build Status](https://travis-ci.org/RedLeap/meteor-service-boilerplate.svg?branch=master)](https://travis-ci.org/RedLeap/meteor-service-boilerplate)

A common way of creating, interfacing and testing micro services.

## Testing
Dependency injection allows the tests to run very quickly **(under one minute)**
in development and within a CI workflow, this is done my injecting dependencies
like `Meteor`, `Crud` and any other imports that are exported at runtime of the
meteor application.

 So please follow this as a rule, this is to avoid having to start meteor to run
 our tests.

Testing is already configured for travis but if your interested in setting it
up for another service then please feel free to open a PR or Issue.

`yarn test` or `yarn run test-watch`

## Build
To create a docker image run `make build`, this builds the meteor
application for `os.linux.x86_64` which will mean you just have the node application,
no mongo database so don't expect it to just run by starting a container from the
image. You will need to have a mongo database but don't worry I've got you covered
below.

### docker-compose is your friend for one last test (QA)?

So what you want to do here is create your service `ms-boilerplate` in this example
and have another service for `mongo` to run your services do this `docker-compose up`.
Notice here we have `depends_on` this will insure that `mongo` starts first.

```yaml
# docker-compose.yml
version: '2'

services:

  ms-ping:
    image: redleap/ms-boilerplate
    environment:
      - PORT=3000
      - ROOT_URL=http://localhost:3000
      - MONGO_URL=mongodb://mongo:27017/services
    depends_on:
      - mongo
    ports:
      - 3000:3000

  ms-addition-service:
    image: redleap/ms-addition-service
    environment:
      - PORT=4000
      - ROOT_URL=http://localhost:4000
      - MONGO_URL=mongodb://mongo:27017/services
    depends_on:
      - mongo
    ports:
      - 4000:4000

  ms-subtraction-service:
    image: redleap/ms-subtraction-service
    environment:
      - PORT=5000
      - ROOT_URL=http://localhost:5000
      - MONGO_URL=mongodb://mongo:27017/services
    depends_on:
      - mongo
    ports:
      - 5000:5000

  ms-times-service:
    image: redleap/ms-times-service
    environment:
      - PORT=6000
      - ROOT_URL=http://localhost:6000
      - MONGO_URL=mongodb://mongo:27017/services
    depends_on:
      - mongo
    ports:
      - 6000:6000


  mongo:
    image: mongo:3.2
    volumes:
      - ./data/db:/data/db


```

## Submodules
 - [RedLeap/meteor-service-core](https://github.com/RedLeap/meteor-service-core)
 - [centiq:meteor-crud](https://github.com/Centiq/meteor-crud)
