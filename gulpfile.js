const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')

gulp.task('postcss', () => {
  return gulp.src('./demo/source/*.css')
    .pipe(postcss([
      atImport,
      cssnext
    ]))
    .pipe(gulp.dest('./demo/dist/'))
})