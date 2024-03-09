# Library API

This app hosts the routes needed to add/update/get/delete book related data.

### Getting started

If the dependecies are not installed yet, pls run the following command from the root level.

```
pnpm install
```

Then to see the service running, run the following commands from the root folder, which will first build the app and then run it on http://localhost:3000. You can see the message `Server is running on port 3000` on the terminal.

```
pnpm --filter library-api build
pnpm --filter library-api start
```

To verify if the APIs are working, the Postman collection has been added into the path `library-service/apps/library-api/postman/Libray-Service-APIs.postman_collection.json`

To run the test against this app, pls run

```
pnpm --filter library-api test
```
