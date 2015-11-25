'use strict';
var gulp = require('gulp'),
    po = require('./config'),
    del = require('del');


gulp.task('clean', function () {
    return del([po.buildDir + '/**']);
});
