# html5bootstrap

A ready-to-code set of files to begin coding right away with all the tools the open source community offers in its great generosity.
and everything explained in comments

Uses [webpack 4](https://webpack.js.org/), [Babel 7.4](https://babeljs.io/),
[storybook 5](https://storybook.js.org/), [emotion 10](https://emotion.sh/),
[browserSync](http://www.browsersync.io), [React 16](https://reactjs.org/),
[redux](https://redux.js.org/) and [redux-saga](https://redux-saga.js.org/),
[jest 24](https://jestjs.io/), [enzyme](https://airbnb.io/enzyme/)

Uses [json-server](https://github.com/typicode/json-server) for the dev back-end

## Basic usage

```bash
git clone https://github.com/laruiss/front-boilerplate

cd front-boilerplate

npm install

npm start
```

It will open http://localhost:8080 in your default browser

## Other scripts

To see the components:

```bash
npm run storybook
```

To start json-server and webpack-dev-server all at once:

```bash
npm start
```

To start only the front-end (webpack-dev-server will listen on 8080 and browser-sync on 3000):

```bash
npm run dev
```

To start only the back-end (will listen on port 3003):

```bash
npm run server
```

To run flow:

```bash
npm run flow
```

To run flow in watch mode (using chokidar-cli):

```bash
npm run flow:watch
```

To run the tests:

```bash
npm test
```

To run the tests in watch mode:

```bash
npm test -- --watch
```

or

```bash
npm test:watch
```

To format automatically the code (StandardJS only with 2 different rules):

```bash
npm run format
```

## Back-end

### Using json-server

- `GET /ideas` returns a list of all ideas
- `GET /ideas/:ideaId` 
- `POST /ideas`
- `PUT /ideas/:ideaId`
- `DELETE /ideas/:ideaId`

See https://github.com/typicode/json-server for more information.

### Using your own backend

Just run the frontend with

```bash
npm run dev
```

and edit the proxy in webpack.config.js at the end of the file.
