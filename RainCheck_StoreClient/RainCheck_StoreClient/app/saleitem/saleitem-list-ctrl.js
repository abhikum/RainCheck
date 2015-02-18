(function () {
    'use strict';

    angular.module('raincheckstore').controller('SaleItemsCtrl', ['$scope', 'appapi', SaleItemsCtrl]);

    function SaleItemsCtrl($scope, appapi) {
        var vm = this;
        
        appapi.getsaleitem(oncompleteSaleItems);

        function oncompleteSaleItems(results) {
            vm.items = results;
            $scope.$apply();
        };
    }
})();