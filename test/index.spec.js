'use strict';
var testPipeline = require('../');
var expect = require('chai').expect;
var del = require('del');
var gulp = require('gulp');
var fs = require('fs');
var config = {
  karmaOpts: {
    files: [
      './test/fixtures/test-spec.js'
    ]
  }
}
describe('Test Results Generations', function() {

  it('should test that a reports folder was generated', function (done) {
    del.sync(['./reports']);
    testPipeline(config).testCI(validateReports);

    function validateReports(){
      fs.access(process.cwd() + '/reports/', function(err) {
        if (err === null) {
          expect(true).to.be.true;
          done();
        } else {
          console.log('Error');
        }
      });
    }
  });

});
