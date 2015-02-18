(function () {
    'use strict';

    angular.module('raincheck_customer').controller('signInCtrl', ['$scope', 'appapi', signInCtrl]);

    function signInCtrl($scope, appapi) {

        $scope.signIn = function (authProvider) {
            appapi.signin(authProvider);
        };

    }
})();