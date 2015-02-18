(function () {
    'use strict';
   
    angular.module('raincheckstore').controller('signInCtrl', ['$scope', 'appapi', signInCtrl]);

    function signInCtrl($scope, appapi) {

        $scope.signIn = function () {
            appapi.signin();
        };
        
    }
})();