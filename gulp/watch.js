'use strict';

var gulp = require('gulp'),
    po = require('./config');

gulp.task('watch', ['build'], function () {

    gulp.watch(po.srcDir + '/**/*.html', ['html']);
    gulp.watch(po.srcDir + '/**/*.js',['browserify']);
    gulp.watch('./sass/**/*.scss', ['sass']);

});
