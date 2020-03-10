# React SWAPI GraphQL Code Challenge

A [React](https://reactjs.org/) application to list and view Star Wars
characters from [SWAPI](https://swapi.co/).

Made with:

- React
- PropTypes
- Apollo GraphQL
- Styled Components
- SASS
- Jest
- React Testing Library
- ESLint
- Prettier
- Lodash
- Normalize.css
- Babel
- Webpack

Both modal and infinite pagination were made by hand as an exercise.

## Backend

The GraphQL implementation of SWAPI was forked to allow search by name, gender
and birth year, as per the specification.

- The code can be found at https://github.com/pamplo/swapi-graphql
- A deployed version is currently running at
  https://pamplo-swapi-graphql.herokuapp.com/
- The backend URI can be altered in `/src/config.js`

## Getting Started

Install dependencies with:

```sh
npm install
```

## Local Server

To run locally using a development server with hot reloading:

```sh
npm start
```

## Distribution

The following command creates a `/dist` folder containing all required files for
distribution:

```sh
npm run build
```

## Test

The tests are illustrative, to run execute:

```sh
npm run test
```
