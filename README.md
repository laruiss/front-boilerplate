html5bootstrap
==============

A ready-to-code set of files to begin coding right away with all the tools the open source community offers in its great generosity.
and everything explained in comments

Uses [webpack 4](https://webpack.js.org/), [Babel 7](https://babeljs.io/),
[storybook 4](https://storybook.js.org/), [emotion](https://emotion.sh/),
[browserSync](http://www.browsersync.io), [React 16](https://reactjs.org/),
[redux](https://redux.js.org/) and [redux-saga](https://redux-saga.js.org/),
[jest 23](https://jestjs.io/), [enzyme](https://airbnb.io/enzyme/)

Uses [json-server](https://github.com/typicode/json-server) for the dev back-end

# Usage

## Basics

```
$ git clone https://github.com/laruiss/front-boilerplate

$ cd front-boilerplate

$ npm install

$ npm start
```

It will open http://localhost:8080 in your default browser

## Other scripts

To see the components:
```
npm run storybook
```

To start json-server and webpack-dev-server all at once:
```
npm run storybook
```

To start only the front-end (webpack-dev-server will listen on 8080 and browser-sync on 3000):
```
npm run dev
```

To start only the back-end (will listen on port 3003):
```
npm run server
```

To run flow:
```
npm run flow
```

To run flow in watch mode (using chokidar-cli):
```
npm run flow:watch
```

To run the tests:
```
npm test
```

To run the tests in watch mode:
```
npm test -- --watch
```
or
```
npm test:watch
```

To format automatically the code (StandardJS only with 2 different rules):
```
npm run format
```

# Back-end

## Using json-server

- `GET /ideas` returns a list of all ideas
- `GET /ideas/:ideaId` 
- `POST /ideas`
- `PUT /ideas/:ideaId`
- `DELETE /ideas/:ideaId`

See https://github.com/typicode/json-server for more information.

## Using your own backend

Just run the frontend with
```
npm run dev
```

and edit the proxy in webpack.config.js at the end of the file.
