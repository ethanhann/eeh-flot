(function (angular) {
    'use strict';

    function FlotDirective(eehFlot) {
        return {
            restrict: 'AE',
            template: '<div class="eeh-flot"></div>',
            scope: {
                dataset: '=',
                options: '@'
            },
            link: function link(scope, element) {
                var renderArea = element.find('.eeh-flot');
                eehFlot(renderArea, scope.dataset, scope.options);
            }
        };
    }

    angular.module('eehFlot').directive('eehFlot', FlotDirective);
})(angular);
