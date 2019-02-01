const gulp = require('gulp');
const babel = require("gulp-babel");
//const nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  return gulp.src("src/index.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("test", function() {
    return gulp.src("tests/test.js", {read: false})
    .pipe(mocha())
});