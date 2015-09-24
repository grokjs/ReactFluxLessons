'use strict';

var gulp = require('gulp'); // gulp build process
var gutil = require('gulp-util'); // Logs gulp process to command line
var source = require('vinyl-source-stream'); // Moving files from one part of build process to another
var browserify = require('browserify'); // Responsible for managing dependencies
var watchify = require('watchify'); // Auto re-run gulp file on changes
var reactify = require('reactify'); // Works with browserify to convert jsx to js

gulp.task('default', function () {
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./'));
    }

    build();
    bundler.on('update', build);
});