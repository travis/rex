# rex

rex is a Really EXcellent way to develop webapps.

[![CircleCI](https://circleci.com/gh/travis/rex.svg?style=svg)](https://circleci.com/gh/travis/rex)

# Quickstart

First, (install Docker)[https://docs.docker.com/install/].

Next, run

```
npm install
npm start
```

To get a development environment. The first time you run these
commands we'll build a bunch of docker images and do a bunch of
initialization - please be patient.

Visit (http://localhost:8080)[http://localhost:8080] to see your running app.

# I'd like to...

## work on the whole app

```
npm start
```

This will spin the whole system up in docker containers. Code changes
in either the `api` or `ui` projects will be automatically reloaded
(though there is usually at least a short delay).

## sync to the latest database schema and reset the database

```
npm run docker:db:sync:force
```


You'll want to run this any time you want to be absolutely sure you're
using the latest database schemas. I run this after all schema changes
to avoid the possiblity of migration-related bugs.

## work on the frontend

```
npm run storybook
```

This will spin up `storybook` on your machine (without Docker). Watch
the console for instructions on accessing the Story Book. Code changes
in the `ui` project will be automatically reloaded.

## work on the API


this is slower, but should work every time:

```
npm run docker:api:watch:test
```

OR

this is faster, but requires `npm start` to be running in the
background or in another terminal:

```
npm start & # unless it's already running
npm run api:watch:test
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
npm docker:db:reset
```

## do something that isn't documented here

Add a new section with the thing you'd like to be able to do and TODO:
in the body. Submit a PR. Ask someone who might know how to do the
thing to review and update the PR!



# Common issues

## Docker incorrect credentials error

This error sometimes occurs when first running the stack. To fix this, try signing out of your Docker desktop account.
