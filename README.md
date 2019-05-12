# ShoppingCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Get started

### Clone the repo

```shell
git clone https://github.com/dnlmx/shopping-cart
cd intern-angular
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
```

### Install json-server

Install the `jsn-server` package for backend fake data and verify that it works:

```shell
npm install -g json-server
json-server --watch db.json
```

NOTE: The path for the db.json file in the project is `src/app/data/db.json`

### Start the development server and proxy

Run `npm run start:proxy` for a dev server. The app will automatically reload if you change any of the source files. 

`json-server` is running at localhost:3000 serving all the required fake api’s, but the angular dev server also start a proxy for json-server at http://localhost:4200/api.

### Check the app

Navigate to `http://localhost:4200/`.
