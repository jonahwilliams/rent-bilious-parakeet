'use strict';

let gulp = require('gulp');
let concat = require('gulp-concat');
let babelify = require('babelify');
let browserify = require('browserify');
let source = require('vinyl-source-stream');


/*
  gulp configuration settings
*/
let config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'src/css/'
    ],
    dist: './dist'
  }
};

gulp.task('html', () => {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('js', ()=> {
  browserify({
    entries: './src/index.jsx',
    extensions: ['.js', '.jsx'],
    debug: true
  })
  .transform(babelify.configure({
    ignore: /(bower_components)|(node_modules)/
  }))
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(`${config.paths.dist}/scripts`));
});

gulp.task('css', () => {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(`${config.paths.dist}/css`));
});

gulp.task('watch', () => {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html','css','js','watch']);
