/* jshint node: true */
'use strict';

var plugins = require('gulp-load-plugins')({lazy: true});
var handyman = require('pipeline-handyman');
var Server = require('karma').Server;
var lazypipe = require('lazypipe');

// Karma configuration overrides
var config = {
  opts: {
    srcDir: 'src',
    reportsDir: './reports/coverage'
  },
  default: {
    files: ['./test/index.spec.js']
  },
  tdd: {},
  debug: {
    browsers: ['Chrome']
  },
  ci: {
    singleRun: true,
    junitReporter: {
      outputFile: 'test-results.xml'
    }
  },
  server: {
    host: 'localhost',
    port: 9002,
    fallback: 'index.html'
  }
};

module.exports = karmaFunctions;


function karmaFunctions(userConfig) {

  if (userConfig) {
    config = handyman.updateConf(config, userConfig);
  }
  //
  var karmaCommonConf = handyman.updateConf(require('./karma.conf.js')(config.opts),
  config.default);

  var pipeline = {
    testCI: testCI,
    testTDD: testTDD,
    testDebug: testDebug
    // testCoverage: testCoverage
  };
  return pipeline;

  function testCI () {
    var karmaConfig = handyman.updateConf(karmaCommonConf, config.ci);
    var server = new Server(karmaConfig);
    server.start();
  }

  function testTDD() {
    var server = new Server(karmaCommonConf);
    server.start();
  }

  function testDebug() {
    var karmaConfig = handyman.updateConf(karmaCommonConf, config.debug);
    var server = new Server(karmaConfig);
    server.start();
  }

  // function testCoverage() {
  //
  //     return lazypipe()
  //
  // }
}
