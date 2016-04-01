'use strict';

const gulp        = require('gulp');
const runSequence = require('run-sequence');
const sass        = require('gulp-sass');

/* Compile our sass code. */
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

/* Watch for sass changes */
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

/* Build Task */
gulp.task('build', function (callback) {
  runSequence(
    'sass',
    function (error) {
      if (error) {
        console.log(error.message);
      }
      callback(error);
    });
});
