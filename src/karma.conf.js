/* jshint node: true */
'use strict';

{
  module.exports = function (config) { // eslint-disable-line no-unused-vars
    return {
      basePath: '',

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['mocha'],

      // list of files / patterns to load in the browser
      files: [],

      // list of files to exclude
      exclude: [],

      // test results reporter to use
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['mocha', 'coverage'],

      coverageReporter: {
        dir: './reports',
        reporters: [
          {
            type: 'html',
            subdir: 'report-html'
          }, {
            type: 'lcov',
            subdir: 'report-lcov'
          }, {type: 'text-summary'}
        ]
      },

      // web server port
      port: 9875,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: 'WARN',

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,

      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS']

    };
  };
}