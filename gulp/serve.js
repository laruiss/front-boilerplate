var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    _ = require('lodash'),
    po = require('./config'),
    browserSync = require('browser-sync').create();



gulp.task('serve', ['watch'], function() {
    browserSync.init({
        server: {
            baseDir: "./target"
        }
    });
    gulp.watch(po.buildDir + '/*.html').on('change', browserSync.reload);
    gulp.watch(po.buildDir + '/**/*.js').on('change', _.debounce(browserSync.reload, 500));
});

require('./styles')(browserSync);
