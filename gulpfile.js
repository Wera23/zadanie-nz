var 

gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),

source = {
    in: 'sass/style.scss',
    out: ''
},

options = {
    sass: {
        outputStyle: 'nested',
        precision: 3,
        errLogToConsole: true
    },
    autoprefixer: {
        add: true,
        flexbox: true,
        grid: true
    }
};


gulp.task('sass', function() {
    return gulp.src(source.in)
    .pipe(sass(options.sassOpts))
    .pipe(autoprefixer(options.autoprefixer))
    .pipe(gulp.dest(source.out))
});

gulp.task('watchSass', ['sass'], function() {
    gulp.watch(source.in, ['sass']);
});
