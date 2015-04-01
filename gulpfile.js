var paths = {
    scripts: 'js/**/*.js',
    styles: 'scss/**/*.scss'
};
var dest = {
    styles: 'dist/css',
    scripts: 'dist/js'
};

var gulp = require("gulp"),
    concat    = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename    = require('gulp-rename'),
    autoprefixer  = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber');

var onError = function(err){
    console.log(err.toString());
    this.emit('end');
};

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass())
        .pipe(concat('tinymaterial.css'))
        .pipe(gulp.dest(dest.styles))
        .pipe(autoprefixer({
            browsers: ['last 5 versions', 'ie >= 8'],
            cascade: false
        }))
        .pipe(gulp.dest(dest.styles))
        .pipe(minifyCSS())
        .pipe(rename('tinymaterial.min.css'))
        .pipe(gulp.dest(dest.styles));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    // gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watch', 'styles']);