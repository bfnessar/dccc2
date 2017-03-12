(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('graphWindowDirective', graphWindowDirective);

    /* @ngInject */
    function graphWindowDirective() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/components/dataDisplay/graphWindow.html',
            scope: {
              model: '=',
            },
        };

        return directive;

    }

})();
