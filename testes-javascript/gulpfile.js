'use strict';
// instanciando módulos
var clean = require('gulp-clean');
var gulp = require('gulp');
var gutil = require('gulp-util');
var htmlmin = require('gulp-htmlmin');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var merge = require('merge-stream');
var uglify = require('gulp-uglify');
var series = require('stream-series');
var strip = require('gulp-strip-comments');
var rename = require('gulp-rename');
var rm = require('gulp-rimraf');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var Server = require('karma').Server;

gulp.task('dist', function (callback) {

    runSequence('clean', 'test', 'javascript', 'html', callback);
});

gulp.task('clean', function () {
    return gulp.src('www', {
            read: false
        })
        .pipe(clean());
});

gulp.task('javascript', function () {

    var src = gulp
        .src(['src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'))
        .pipe(gulp.dest('www/js/'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('www/js/'));

    var vendor = gulp
        .src(['node_modules/jquery/dist/*'])
        .pipe(gulp.dest('www/js/vendors/'));
    return merge(src, vendor);
});


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('html', function (cb) {

    var vendorStream = gulp.src(['www/js/vendors/*.min.*', '!www/js/vendors/*.slim.*'], {
        read: false,
    });

    var srcStream = gulp.src(['www/js/util/*.min.js', 'www/js/repositorio/*.min.js', 'www/js/*min.js'], {
        read: false
    });

    //https://github.com/klei/gulp-inject/wiki/Clarifying-injected-paths

    return gulp.src('./src/*.html')
        .pipe(inject(series(vendorStream, srcStream), {
            relative: true,
            ignorePath: '../www/'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(strip())
        .pipe(gulp.dest('www/'));
});

gulp.task('watch', function (callback) {

    return gulp.watch('src/**/*', function (event) {
        gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('watch-dist');
        // runSequence('clean', 'javascript', 'html', callback);
    });
});


gulp.task('watch-dist', function (callback) {

    runSequence('javascript', 'html', callback);
});
