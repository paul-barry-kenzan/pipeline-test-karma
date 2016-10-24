'use strict';

var testPipeline = require('../src/');
var expect = require('chai').expect;
var del = require('del');
var fs = require('fs');

var config = {
  karmaOpts: {
    files: [
      './test/fixtures/test-spec.js'
    ]
  }
};

describe('Pipeline API', function () {

  it('should expose a testCI method', function () {
    expect(testPipeline.testCI).to.exist;
  });

  it('should expose a testTDD method', function () {
    expect(testPipeline.testTDD).to.exist;
  });

});

xdescribe('Test Results Generations', function () {

  it('should test that a reports folder was generated', function (done) {
    del.sync(['./reports']);
    testPipeline(config).testCI(validateReports);

    function validateReports () {
      fs.access(process.cwd() + '/reports/', function (err) {
        if (err === null) {
          expect(true).to.be.true;
          done();
        } else {
          // console.log('Error: Reports should have been generated.');
        }
      });
    }
  });

  it('should test that a reports folder is not generated when reporting is false', function (done) {
    config.enableReporting = false;
    del.sync(['./reports']);
    testPipeline(config).testCI(validateReports);

    function validateReports () {
      fs.access(process.cwd() + '/reports/', function (err) {
        if (err === null) {
           // console.log('Error: Reports should not have been generated.');
        } else {

          expect(true).to.be.true;
          done();
        }
      });
    }
  });

});