'use strict';

var gulp = require('gulp'),
    po = require('./config');


gulp.task('html', function () {
    return gulp.src(po.srcDir + '/index.html')
        .pipe(gulp.dest(po.buildDir));
});
