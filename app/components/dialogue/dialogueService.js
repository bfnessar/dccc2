(function() {
    'use strict';

    angular
        .module('myApp')
        .service('dialogueService', dialogueService);

    dialogueService.$inject = ['$http'];

    function dialogueService($http) {
      var DialogueService = {
        'teststring': 'testtesttesttest',
        'dialogue_position': 0,

        exampleFunction: function(arg) {
          var myself = this;

        },

        dialogue_forward: function() {
          this.dialogue_position++;
        },
        dialogue_backward: function() {
          this.dialogue_position--;
        }


      }

      return DialogueService;

    }
})();
