const gulp = require('gulp');


function task (gulpReadme) {
    gulp.src(['index.js'])
        .pipe(gulp.dest('npm'));

}

task();