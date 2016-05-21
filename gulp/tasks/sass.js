'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
browserSync.create();
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
  return gulp.src('assets/styles/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/styles/css'))
    .pipe(browserSync.stream());
});
