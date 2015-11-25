'use strict';

var gulp = require('gulp');

gulp.task('build', ['sass', 'html', 'modernizr']);
gulp.task('default', ['serve']);
