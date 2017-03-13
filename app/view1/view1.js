'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [
  '$scope', 'dialogueService', 'graphWindowService', 'connecticutApiFactory',
  function($scope, dialogueService, graphWindowService, connecticutApiFactory) {
    var vm = this;
    // Dialog box
    vm.dialogue_position = 0;
    vm.dialogue_object = angular.copy(dialogueService);
    vm.connecticutData = angular.copy(graphWindowService);
    vm.connecticutData.queryConnecticut();

    vm.dialogue_forward = function() {
      vm.dialogue_object.dialogue_forward();
    };
    vm.dialogue_backward = function() {
      vm.dialogue_object.dialogue_backward();
    };
    vm.get_dialogue_position = function() {
      return vm.dialogue_object.dialogue_position;
    };




}]);
