'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [
  '$scope', 'dialogueService',
  function($scope, dialogueService) {
    var vm = this;


    // Dialog box
    vm.dialogue_position = 0;
    vm.dialogue_object = angular.copy(dialogueService);




}]);
