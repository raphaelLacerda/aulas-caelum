'use strict';
var clean = require('gulp-clean');
var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('child_process').exec;
var merge = require('merge-stream');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');
var strip = require('gulp-strip-comments');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var watch = require('gulp-watch');
var Server = require('karma').Server;


gulp.task('www', function (cb) {

    var build = gulp.src(['build/**/*'])
        .pipe(gulp.dest('www/build/'));

    var semantic = gulp.src(['semantic/dist/**'])
        .pipe(gulp.dest('www/semantic/dist'));

    return merge(build, semantic);

});

gulp.task('clean', function () {

    return gulp.src(['www', 'build'], {
            read: false
        })
        .pipe(clean());
});

gulp.task('estatico', function (cb) {
    var css = gulp
        .src(['src/css/**/*.css'])
        .pipe(gulp.dest('build/css/'));

    var img = gulp
        .src(['src/img/**/*.*'])
        .pipe(gulp.dest('build/img/'));

    var js = gulp
        .src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.*'])
        .pipe(gulp.dest('build/vendors/'));
    return merge(css, img, js);
});

gulp.task('dist', function (callback) {

    // runSequence('clean', 'jshint', 'test', ['webpack', 'estatico', 'html'], 'www', callback);
    runSequence('clean', 'jshint', ['webpack', 'estatico', 'html'], 'www', callback);
});

gulp.task('html', function (cb) {
    return gulp
        .src(['index.html'])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(strip())
        .pipe(gulp.dest('www/'));
});

gulp.task('jshint', function () {

    return gulp
        .src(['src/js/**/*.js', 'spec/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'));
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('watch', function () {

    return gulp.watch('src/**/*.js', function (event) {
        gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('jshint');
    });
});

gulp.task('webpack', function (cb) {
    exec('npm run build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('webpack-server', function (cb) {
    exec('npm run dev', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});