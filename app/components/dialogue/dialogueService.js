(function() {
    'use strict';

    angular
        .module('myApp')
        .service('dialogueService', dialogueService);

    dialogueService.$inject = ['$http', 'graphWindowService'];

    function dialogueService($http, graphWindowService) {
      var DialogueService = {
        'teststring': 'testtesttesttest',
        'dialogue_position': 0,

        'graph_object': angular.copy(graphWindowService),

        initializeGraph: function() {
          var myself = this;
          this.graph_object.queryConnecticut();
          this.graph_object.consolidateConnecticutData();
          console.log(this.graph_object);
        },

        skip_to: function(page_num) {
          this.dialogue_position = page_num;
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
