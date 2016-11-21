var gulp = require('gulp'); 
var less = require('gulp-less');
var util = require('gulp-util');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var inlinesource = require('gulp-inline-source');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var babelify = require('babelify');

// Run this function on some error instead of exiting gulp
var onError = function(err) {
  util.beep();
  console.log(err);
};

gulp.task('inlinesource', function() {
  gulp.src(['./in/index.html'])
  .pipe(plumber({
    errorhandler: onError
  }))
  .pipe(inlinesource({compress: false}))
  .pipe(gulp.dest('./'))
  .pipe(gulp.dest('./_site'));
});

gulp.task('styles', function() {
  gulp.src(['./in/less/style.less'])
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(less({
    paths: ['in/less']
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./in'));
});

function bundle(bundler) {
  bundler
  .bundle()
  .on('error', function(err) {
    util.beep();
    util.log('Browserify error:', err); 
    this.emit('end');
  })
  .pipe(source('script.js'))
  .pipe(gulp.dest('./in'));
}

gulp.task('watch', function() {
  var bundler = browserify('./in/js/Main.js', {cache: {}, packageCache: {}, debug: true})
  .plugin(watchify, {ignoreWatch: ['**/node_modules/**']})
  .transform(babelify, {presets: ['es2015', 'react']});

  bundle(bundler);

  watch('./in/less/**', function() {
    gulp.start('styles');
  });

  bundler.on('update', function() {
    bundle(bundler);
  });
  
  bundler.on('log', util.log);

  watch(['./in/style.css', './in/script.js', './in/index.html'], function() {
    gulp.start('inlinesource'); 
  });

});

gulp.task('default', ['watch', 'styles', 'inlinesource']);
