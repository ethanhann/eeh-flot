(function (angular) {
    'use strict';

    function FlotDirective(eehFlot, $interval) {
        return {
            restrict: 'AE',
            template: '<div class="eeh-flot"></div>',
            scope: {
                dataset: '=',
                options: '@',
                updateCallback: '=',
                updateCallbackTime: '@'
            },
            link: function link(scope, element) {
                scope.updateCallbackTime = scope.updateCallbackTime || 40;
                var renderArea = element.find('.eeh-flot');
                var chart = eehFlot(renderArea, scope.dataset, scope.options);
                if (angular.isFunction(scope.updateCallback)) {
                    $interval(function() {
                        scope.updateCallback(chart, scope.dataset);
                    }, scope.updateCallbackTime);
                }
            }
        };
    }

    angular.module('eehFlot').directive('eehFlot', FlotDirective);
})(angular);
