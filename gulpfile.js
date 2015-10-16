/* jshint node: true */

'use strict';

var gulp = require('gulp');
var testPipeline = require('./src/index.js')();
var validatePipeline = require('pipeline-validate-js')();
var Server = require('karma').Server;
var handyman = require('pipeline-handyman');
var plugins = require('gulp-load-plugins')({lazy: true});

var config = {
  files: [
   'src/**/*.js'
 ],
 server: {
   host: 'localhost',
   port: 9002,
   fallback: 'index.html'
 }
};

gulp.task('default', function() {

  // testPipeline.testCI();
  // testPipeline.testTDD();
  testPipeline.testDebug();

  return gulp
    .src('./reports/coverage/report-html')
    .pipe(plugins.webserver, {
      host: config.server.host,
      port: config.server.port,
      fallback: config.server.fallback,
      open: true
    });
});



function done() {
  console.log("DOne testing");
}
