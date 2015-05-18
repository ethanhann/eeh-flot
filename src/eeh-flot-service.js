(function (angular) {
    'use strict';

    function FlotService ($window) {
        if (angular.isUndefined($window.jQuery)) {
            throw 'Include jQuery.';
        }
        if (angular.isUndefined($window.jQuery.plot)) {
            throw 'Include the jQuery.flot plugin.';
        }
        return $window.jQuery.plot;
    }

    angular.module('eeh-flot').service('eehFlot', FlotService);
})(angular);
