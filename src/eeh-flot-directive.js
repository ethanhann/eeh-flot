(function (angular) {
    'use strict';

    function FlotDirective(eehFlot) {
        return {
            restrict: 'AE',
            scope: {
                dataset: '=',
                options: '@'
            },
            link: function link(scope, element) {
                eehFlot(element, scope.dataset, scope.options);
            }
        };
    }

    angular.module('eeh-flot').directive('eehFlot', FlotDirective);
})(angular);