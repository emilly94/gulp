//const { require } = require("gulp-cli/lib/shared/cli-options");

const gulp = require("gulp");
const concat = require("gulp-concat")
const cssmin = require("gulp-cssmin")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify")

function tarefasCss(cb){
  return gulp.src('./vendor/**/*.css')
  .pipe(concat('libs.css'))
  .pipe(cssmin())
  .pipe(rename({ suffix: '.min'}))
  .pipe(gulp.dest('.dist/css'))
}

function tarefasJS(){
  return gulp.src('./vendor/**/*.js')
  .pipe(concat('libs.js'))
  .pipe(uglify())
}

exports.styles = tarefasCss
exports.scripts = tarefasJS