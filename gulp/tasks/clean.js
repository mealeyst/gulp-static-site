'use strict';

import gulp from 'gulp';
import rmdir from 'rmdir';

gulp.task('clean', () => {
  rmdir('./build', (err, dirs, files) => {
    if(!err) {
      console.log(`Deleting ${dirs}, and ${files}`);
    }
  });
});
