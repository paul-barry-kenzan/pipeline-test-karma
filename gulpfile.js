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
 ]
};

gulp.task('default', function() {

  // testPipeline.testCI();
  // testPipeline.testTDD();
  testPipeline.testDebug();

});
