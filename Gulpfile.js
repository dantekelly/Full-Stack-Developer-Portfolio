var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var rename       = require("gulp-rename");
var cssmin       = require('gulp-cssmin');
var uglify       = require('gulp-uglify');

gulp.task('jscompress', function() {
  gulp.src('scripts/main.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('scripts'));
});

gulp.task('autoprefixer', function () {
  gulp.src('styles/*.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('styles'));
});

gulp.task('csscompress', function () {
  gulp.src('styles/*.min.css')
    .pipe(cssmin())
    .pipe(gulp.dest('styles'));
});

gulp.task('build', ['jscompress','autoprefixer','csscompress']);