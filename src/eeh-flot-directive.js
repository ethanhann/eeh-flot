(function (angular) {
    'use strict';

    function FlotDirective(eehFlot, $interval) {
        return {
            restrict: 'AE',
            template: '<div class="eeh-flot"></div>',
            scope: {
                dataset: '=',
                options: '@',
                updateCallback: '&',
                updateCallbackTime: '@'
            },
            link: function link(scope, element) {
                scope.updateCallbackTime = scope.updateCallbackTime || 1000;
                var renderArea = element.find('.eeh-flot');
                var chart = eehFlot(renderArea, scope.dataset, scope.options);
                if (angular.isDefined(scope.updateCallback) &&
                    angular.isFunction(scope.updateCallback)) {
                    $interval(function() {
                        scope.updateCallback(chart, scope.dataset);
                    }, scope.updateCallbackTime);
                }
            }
        };
    }

    angular.module('eehFlot').directive('eehFlot', FlotDirective);
})(angular);
