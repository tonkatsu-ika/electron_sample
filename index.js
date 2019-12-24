'use strict';

const electron = require('electron');
const remote = electron.remote;
const fileUtil = remote.require('./lib/fileUtil');
const baseDir = process.cwd();

var ngModule = angular.module('readUs', []);

ngModule.controller('MainController', function($scope) {
  var main = this;

  main.getFile = function(file) {
    main.fileText = fileUtil.getAsText(file.filepath);
  };

  fileUtil.fetchReadmeList(baseDir, (err, fileList) => {
    if(!err) console.error(err);
    $scope.$apply( () => {
      main.fileList = fileList;
    });
  });
});

ngModule.directive('mdPreview', () => {
  return function ($scope, $elem, $attrs) {
    $scope.$watch($attrs.mdPreview, (source) => {
      $elem.html(marked(source));
    });
  };
});

