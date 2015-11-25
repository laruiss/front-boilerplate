'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserify  = require('browserify'),
    stringify  = require('stringify'),
    eslint  = require('gulp-eslint'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    path = require('path'),
    po = require('./config'),
    pkg = require('../package.json'),
    stylish = require('jshint-stylish'),
    yargs = require('yargs').argv,
    minify = !!yargs.minify,
    withMaps = true,
    color = yargs.color !== false,
    jenkins = !!yargs.jenkins,
    handleError = function (err) {
        if (jenkins) {
            console.log(err);
            throw err;
        } else {
            console.error(err.message);
            this.emit('end');
        }
    };

gulp.task('modernizr', ['browserify'], function() {
  return gulp.src(path.join(po.buildDir, 'js', 'app', 'app.js'))
    .pipe($.modernizr())
    .pipe(gulp.dest(path.join(po.buildDir, 'js', 'lib')));
});

gulp.task('browserify',['js', 'lint'],function(){
    return browserify({
            entries: ['./' + po.srcDir + '/js/app/app.js'],
            standalone: '_widget',
            debug: true
        })
        .transform(stringify({
            extensions: [
                '.html'
            ],
            minify: true,
            minifier: {
                extensions: [ '.html' ]
            }
        }))
        .bundle()
        .on('error', handleError)
        .pipe(source(po.srcDir + '/js/app/app.js'))
        .pipe(buffer())
        .pipe($.rename(path.join('/js/app/app.js')))
        .pipe($.if(withMaps, $.sourcemaps.init({loadMaps: true})))
        .pipe($.if(minify, $.uglify()))
        .pipe($.if(withMaps, $.sourcemaps.write('./')))
        .pipe(gulp.dest(po.buildDir));
});

gulp.task('js', ['lint'],function(){
    return gulp.src([po.srcDir + '/**/*.*'])
        .pipe(gulp.dest(po.buildDir + '/'));
});

gulp.task('lint', function () {
    return gulp.src([po.srcDir + '/public/**/*.js', po.srcDir + '/test/**/*.js', './gulpfile.js'])
        .pipe(eslint());
});
