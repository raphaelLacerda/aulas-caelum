// Karma configuration
// Generated on Mon Apr 10 2017 13:38:30 GMT-0300 (BRT)
'use strict';

// var webpackConfig = require('webpack.config.js');
var webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry;

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        //npm install karma-jasmine-matchers --save-dev
        frameworks: ['browserify', 'jasmine', 'jasmine-matchers'],

        // list of files / patterns to load in the browser
        files: [{
                pattern: 'node_modules/vue/dist/vue.js',
                included: true
            },
            'node_modules/babel-polyfill/dist/polyfill.js',
            'src/js/**/*.js',
            'spec/**/*Spec.js'
        ],
        // 'src/main.js',


        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['coverage', 'webpack'],
            // 'src/**/*.vue': ['webpack'],
            'spec/**/*Spec.js': ['webpack']
        },

        webpack: webpackConfig,
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        browserNoActivityTimeout : 90000,
        // browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,


        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity


    });
}