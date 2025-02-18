# Todo

- Add a workflow to build the packages
- Add a audit routine in the workflow created above for all packages
- Publish the library
- Add a docker compose infrastructure
- Create documentation using Docusaurus
- Initiate the next naming change

## @renkei/core

- Add a custom error for when the network is down
- Add unit tests
- Add badges
- Create another adapter interface for event routes like `EventSourceAdapter`
- Add a `httpAdapter` and `eventSourceAdpater` in the `createClient` function, and remove the `adapter` property
- Rename the `ClientAdapter` into `HttpClientAdapter`
- Rename the `ServerAdapter` into `HttpServerAdapter`
- Add documentation for `createEventRoute`
- Better typing for the validated input and output, to be discriminated and returned as 400 errors from the server

## @renkei/fetch

- Allow passing options for the `createFetchAdapter` function
- Allow compressing the data if possible
- Show an example of a file upload
- Add integration tests
- Add badges
- Add @renkei/core as a peer dependency and fix the version number

## @renkei/node

- Account for compressed requests (see above) if possible
- Add an example explaining how to create its own compression strategy
- Add integration tests
- Add badges
- Add security headers configuration
- Make the cors checking stricter
- Add the ability to rate limit the requests
- Add a static file server
- Add @renkei/core as a peer dependency and fix the version number
- Rename the adapter into `createHttpAdapter` to match the naming convention from the `createFetchAdapter`

## @example/node

- Add Drizzle ORM
- Add an SQLite database

## @example/react

- Separate the `getUsers` logic from the `createUser` logic and the `userCreated` logic

## @renkei/schema

- Create a library that allows for using JSON-safe types for the validation of routes

## Documentation

- Fix mistakes when calling zod without the parse method