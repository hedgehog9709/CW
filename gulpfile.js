var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('minify', function(){
    gulp.src(['src/app.js', 'src/slick.js', 'src/jquery.js'])
        .pipe(uglify({ mangle: true }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'));
});

var watcher = gulp.watch('src/*.js', ['minify']);

