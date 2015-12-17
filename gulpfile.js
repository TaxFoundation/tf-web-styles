'use strict'

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass');

gulp.task('default', ['compileSass', 'watch']);

gulp.task('compileSass', function() {
  gulp.src('./src/scss/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css/'));

  return gutil.log('Compiled Sass');
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', ['compileSass'])
});
