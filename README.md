# studentassessment-api

API for StudentAssessment app. A very basic Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
git clone git@github.com:andy2ndlife/studentassessment-api # or clone your own fork
cd studentassessment-api
npm install
npm start
```

This API should now be running on [localhost:3001](http://localhost:3001/)

## Running Tests

We have a very basic test-case (just 1) for the API. To run tests, follow the below commands from the root of the application folder.

```sh

# Should be the below output incase of tests passed
  GET /
GET / 200 5.327 ms - 22
    ✓ respond with Student Assessment API


  1 passing (42ms)
```


Also the test can be performed by executing the shell script from the project root.

```sh

./script/test

# Should be the below output incase of tests passed

  GET /
GET / 200 5.246 ms - 22
    ✓ respond with Student Assessment API


  1 passing (42ms)
```