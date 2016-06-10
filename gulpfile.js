var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task('compile', function() {
  return browserify('flux/main.js', { debug: true })
    .transform(babelify, {presets: 'react'})
    .bundle()
    .on('error', console.error)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
  gulp.watch('./flux/**/*.js', ['compile']);
});


gulp.task('default', ['compile', 'watch']);
