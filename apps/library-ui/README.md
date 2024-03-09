# Library UI

This app hosts the React app, which gives users the ability to

- Add a book
- Update the status of the book
- Delete the book

### Getting started

If the dependecies are not installed yet, pls run the following command from the root level.

```
pnpm install
```

Then to start the service, run the following command from the root folder, which will ask the app if it can be run on a different port other than 3000 (as 3000 is been used by the API app), saying YES, it will run it on http://localhost:3001.

`Note: This UI app should be running on 3001, as this port has been added on the API app for the CORS policy. If not on 3001, API would reject the request.`

```
pnpm --filter library-ui start
```

To build the App, following command can be used

```
pnpm --filter library-ui build
```

To run the test against this app, pls run

```
pnpm --filter library-ui test
```
