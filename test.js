angular.module('app', ['numberAbbrev'])
.controller('testController', testController);

function testController() {
  var vm = this;
  vm.number = 10000;
}