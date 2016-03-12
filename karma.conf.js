var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
    config.set({
        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-sourcemap-loader')
        ],

        basePath: '',
        frameworks: [ 'jasmine' ],
        files: [ 'test/**/*.spec.js' ],

        preprocessors: {
            'test/**/*.spec.js': [ 'webpack', 'sourcemap' ]
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },

        reporters: [ 'progress' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    })
};