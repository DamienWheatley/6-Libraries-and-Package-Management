const gulp = require('gulp');
const babel = require("gulp-babel");
const nodemon = require('gulp-nodemon');

gulp.task('build', function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});


 
gulp.task('dev', ['build'], function() {
    return nodemon({
        script: 'dist/index.js',
        ext: 'js',
        ignore: ['dist/'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    });
});