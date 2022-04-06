const gulp = require('gulp');
const count = require('count-code-line')

console.log(process.argv);

function task (gulpReadme) {
    count();
    gulp.src(['index.js'])
        .pipe(gulp.dest('npm'));
    gulp.src(['index.js'])
        .pipe(gulp.dest('npm/package/main'))
        .on('end', () => {
            count();
        })
}

task();