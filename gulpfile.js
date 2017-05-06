const gulp = require('gulp');
const minifyCss = require('gulp-clean-css');
const del = require('del');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const publicFolder = 'src/public/';

gulp.task('delete', () => {
    del([publicFolder + 'assets/css'], (err) => {
        console.log('Files deleted');
    });
});

gulp.task('style', () => {
    return gulp
        .src(publicFolder + 'scss/*.scss')
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(publicFolder + 'assets/css'));
});

gulp.task('watch', () => {
    gulp.watch([publicFolder + 'scss/*.scss'], ['style']);
});

gulp.task('default', ['delete', 'style', 'watch']);