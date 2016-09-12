var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/**/*.ts'
        ],
        exclude: [],
        preprocessors: {
            'test/**/*.ts': ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INGO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    })
}
