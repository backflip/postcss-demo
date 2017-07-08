const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext');

gulp.task('postcss', () => {
  return gulp.src('./demo/source/*.css')
    .pipe(postcss([
      cssnext
    ]))
    .pipe(gulp.dest('./demo/dist/'))
})