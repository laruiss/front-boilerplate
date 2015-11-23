html5bootstrap
==============

A ready-to-code set of files to begin coding right away with all the tools the open source community offers in its great generosity.
and everything explained in comments

# Why [node](http://nodejs.org/) ?

Because it is fun and because it is really simple to install and make it work.

# If node cannot be used ?

Just use the `public` directory and put it in the DocumentRoot directory of the virtualhost

# Usage

## With [Grunt](http://gruntjs.com/)

```
$ git clone https://github.com/laruiss/html5bootstrap

$ cd html5bootstrap

$ npm install

$ npm install -g grunt

$ grunt server
```

Then to "build", meaning to optimize JS and CSS with [r.js optimizer](http://requirejs.org/docs/optimization.html):

```
$ grunt build
```
And the to test the build:

```
$ grunt server-dist
```

## Without grunt, just node

```
$ git clone https://github.com/laruiss/html5bootstrap

$ cd html5bootstrap

$ npm install

$ npm start
```

And then go to http://localhost:8007 with your browser

# TODO

  * Add gulp tools
  * Add browserify tools
