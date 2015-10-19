/* jshint node: true */

'use strict';

var gulp = require('gulp');
var testPipeline = require('./src/index.js')();
var validatePipeline = require('pipeline-validate-js')();

gulp.task('default', ['validate:js'], function() {

  testPipeline.testCI();
  // testPipeline.testTDD();

});

gulp.task('validate:js', function() {
  return gulp
    .src('src/*.js')
    .pipe(validatePipeline.validateJS());

});
