'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const gulpConcat = require('gulp-concat');

gulp.task('sass-compile', function(){
  return gulp.src(['app/styles/**/*.*'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('pug', function(){
  return gulp.src('app/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp.src([
    'app/js/jquery-3.6.0.min.js',
    'app/js/jquery-ui.min.js'
  ])
      .pipe(gulpConcat('libs.min.js'))
      .pipe(gulp.dest("dist/js"));

})


gulp.task('scripts', function() {
  return gulp.src([
    'app/js/main.js'
  ])
      .pipe(gulp.dest("dist/js"));

})

gulp.task('icons', function() {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('/dist/webfonts/'));
});


gulp.task('build', gulp.series(gulp.parallel('pug','sass-compile','scripts','icons')));

gulp.task('watch', function(){
  gulp.watch('app/styles/**/*.*', gulp.series('sass-compile'));
  gulp.watch('app/pug/**/*.*', gulp.series('pug'));
  gulp.watch('app/js/**/*.*', gulp.series('scripts'));
});

gulp.task('serve', function(){
  browsersync.init({
    server: 'dist'
  });

  browsersync.watch('dist/**/*.*').on('change', browsersync.reload);
});


gulp.task('tree', function(){
  return gulp.src('*.*',{read: false})
    .pipe(gulp.dest('./app'))
    .pipe(gulp.dest('./app/styles'))
    .pipe(gulp.dest('./app/pug'))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(gulp.dest('./dist/img'))
    .pipe(gulp.dest('./src'))
})


gulp.task('dev', gulp.series('tree', 'build', gulp.parallel('watch', 'serve')));