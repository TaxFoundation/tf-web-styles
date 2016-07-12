'use strict';

var gulp = require('gulp'),
    data = require('gulp-data'),
    swig = require('gulp-swig'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    webserver = require('gulp-webserver');

var getTestData = function (file) {
  return require('./src/data/data.json');
};

gulp.task('default', ['build', 'webserver', 'watch']);

gulp.task('build', ['moveHtml', 'moveImages', 'moveJavascript', 'compileSass'], function (cb) {
  cb();
});

gulp.task('compileSass', function () {
  gulp.src('./src/scss/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({ browsers: ['> 5%'] }))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('moveImages', function () {
  gulp.src('./src/images/**/*')
  .pipe(gulp.dest('./dist/images/'));
});

gulp.task('moveJavascript', function () {
  gulp.src('./src/js/**/*.js')
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('moveHtml', function () {
  gulp.src('./src/templates/*.html')
  .pipe(data(getTestData))
  .pipe(swig({
    defaults: {
      cache: false,
    },
  }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('webserver', function () {
  gulp.src('./dist')
  .pipe(webserver({
    fallback: 'index.html',
    livereload: true,
    open: true,
    port: 1937,
  }));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['compileSass']);
  gulp.watch('./src/images/**/*', ['moveImages']);
  gulp.watch('./src/js/**/*', ['moveJavascript']);
  gulp.watch('./src/templates/**/*.html', ['moveHtml']);
});
