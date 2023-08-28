const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/imagens-originais/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/script'))
}

function compilaSass() {
    return gulp.src('./source/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build'));
}


exports.default = function() {
    gulp.watch('./source/secoes/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/imagens-originais/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}
