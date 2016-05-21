'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import './sass';

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], () => {

  browserSync.init({
    proxy: 'local.macromealey.com'
  });

  gulp.watch('assets/styles/scss/**/*.scss', ['sass']);
  gulp.watch('assets/scripts/*.js', browserSync.reload);
  gulp.watch('index.html').on('change', browserSync.reload);
});
