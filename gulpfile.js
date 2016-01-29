var gulp = require('gulp')
  , babel = require('gulp-babel');

function transpile() {
  return gulp
    .src('src/**/*.js')
    .pipe(babel({
      presets: [
        'es2015'
      , 'stage-0'
      ]
    }))
    .pipe(gulp.dest('lib'));
}

gulp.task('default', transpile);
