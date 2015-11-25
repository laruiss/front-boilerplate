'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    po = require('./config'),
    sass = require("gulp-ruby-sass");

module.exports = function (browserSync) {

    gulp.task('sass', function() {
        return sass('sass/main.scss', { compass: true, sourcemap: true })
                .on('error', function (err) {
                    console.error('Error!', err.message);
                })
                .pipe($.sourcemaps.write('./', {
                    includeContent: false,
                    sourceRoot: '/sass'
                }))
                .pipe(gulp.dest(po.buildDir + '/css'))
                .pipe(browserSync.stream({match: '**/*.css'}));
    });
}
