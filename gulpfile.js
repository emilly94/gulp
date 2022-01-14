//const { require } = require("gulp-cli/lib/shared/cli-options");

const gulp = require("gulp");
const concat = require("gulp-concat")
const cssmin = require("gulp-cssmin")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify")
//const image = require("gulp-image")

function tarefasCss(cb){
  return gulp.src(['./vendor/bootstrap/css/bootstrap.css',
                    './vendor/owl/css/owl.carousel.css/',
])
  .pipe(concat('libs.css'))
  .pipe(cssmin())
  .pipe(rename({ suffix: '.min'}))
  .pipe(gulp.dest('.dist/css'))
}

function tarefasJS(){
  return gulp.src('./vendor/**/*.js')
  .pipe(concat('libs.js'))
  .pipe(uglify())
  .pipe(gulp.dest('.dist/js'))
}

/*function tarefasImagem(){
  return gulp.src('./src/img/*.{png,svg}')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/img'))
}*/

exports.styles = tarefasCss
exports.scripts = tarefasJS
//exports.image = tarefasImagem

/**inserir o codigo sudo gulp image no terminal(corrigir error) */