# ShoppingCart App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Get started

### Clone the repo

```shell
git clone https://github.com/dnlmx/shopping-cart
cd shopping-cart
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

### View the app in developmen mode

Navigate to `http://localhost:4200/`.

## Demo version

You can also show the App in the demo version here:

[https://shopping-cart.dnl.now.sh](https://shopping-cart.dnl.now.sh)

## Features included

- Ngrx support for store cart items.
- Responsive version.
- Full text search.
- Profile module for user data.
- All products list and product detail view.

## Dependencies

Module | Version
------------ | -------------
angular/cdk | 7.3.7
angular/animations | 7.2.0
angular/material | 7.3.7
ngrx/router-store | 7.4.0
ngrx/store | 7.4.0
ngrx/store-devtools | 7.4.0
bootstrap | 4.3.1
bootstrap-material-design | 4.1.1
bootstrap-notify | 3.1.3
jquery | 3.4.1
rxjs | 6.3.3
