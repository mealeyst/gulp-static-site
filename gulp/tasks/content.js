'use strict';

import gulp from 'gulp';
import markdown from 'gulp-markdown-to-json';
import replace from 'gulp-replace';

gulp.task('content', () => {
  return gulp.src('./contents/**/*.md')
    .pipe(replace(/(^(?!---\n).)/, '---\n$1'))
    .pipe(markdown())
    .pipe(gulp.dest('./build/'));
});
