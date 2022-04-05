const gulp = require('gulp');

console.log(process.argv);

function task (gulpReadme) {
    gulp.src(['index.js'])
        .pipe(gulp.dest('npm'));

}

task();