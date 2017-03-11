(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('dialogueDirective', dialogueDirective);

    /* @ngInject */
    function dialogueDirective() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/components/dialogue/dialogue.html',
            scope: {
              model: '=',
            },
        };

        return directive;

    }

})();
