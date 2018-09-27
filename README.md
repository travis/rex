# rex

rex is a Really EXcellent way to develop webapps.

# Quickstart

First, (install Docker)[https://docs.docker.com/install/].

Next, run

```
npm run docker:db:sync:force
npm start
```

To get a development environment. The first time you run these
commands we'll build a bunch of docker images and do a bunch of
initialization - please be patient.

Visit (http://localhost:8080)[http://localhost:8080] to see your running app.

# I'd like to...

## work on the whole app

```
npm run db:sync-force # you only need this the first time you run the app
npm start
```

This will spin the whole system up in docker containers. Code changes
in either the `api` or `ui` projects will be automatically reloaded
(though there is usually at least a short delay).

## work on the frontend

```
npm run storybook
```

This will spin up `storybook` on your machine (without Docker). Watch
the console for instructions on accessing the Story Book. Code changes
in the `ui` project will be automatically reloaded.

## work on the API

```
npm run docker:api:watch:test
```

This will run the `api` project tests and then automatically re-run
them when code in the `api` project changes. API development should be
primarily test-driven.

## run all the tests once

```
npm test
```

## reset the database

```
npm db:sync-force
```

## do something that isn't documented here

Add a new section with the thing you'd like to be able to do and TODO:
in the body. Submit a PR. Ask someone who might know how to do the
thing to review and update the PR!



# Common issues

## Docker incorrect credentials error

This sometimes occurs when first running the stack. To fix this, try signing out of your Docker desktop account.