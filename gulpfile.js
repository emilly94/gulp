//const { require } = require("gulp-cli/lib/shared/cli-options");

const gulp = require("gulp");

function tarefasCss(){
  return gulp.src('./vendor/**/*.css')
  /*.pipe(concat('libs.css'))
  .pipe(cssmin())
  .pipe(rename({ suffix: '.min'}))*/
  .pipe(gulp.dest('.dist/css'))
}

exports.styles = tarefasCss