(function () {
    'use strict';

    angular.module('raincheckstore').controller('RainCheckCtrl', ['$scope', '$stateParams', 'appapi', RainCheckCtrl]);

    function RainCheckCtrl($scope, $stateParams, appapi) {
        var vm = this;
        $scope.raincheck = {};

        vm.populateValue = function () {
            $scope.raincheck.itemname = $stateParams.itemname;
            $scope.raincheck.saleprice = $stateParams.saleprice;
            $scope.raincheck.regularprice = $stateParams.regularprice;
        };

        $scope.submitRaincheck = function () {            
            appapi.submitRainCheck($scope.raincheck);            
        };

        vm.populateValue();
    }
})();