(function () {
    'use strict';

    angular.module('raincheckstore').controller('LayoutCtrl', ['$scope', '$state', '$mdSidenav', 'appapi', LayoutCtrl]);

    function LayoutCtrl($scope, $state, $mdSidenav, appapi) {
        var vm = this;
        
        $scope.toggleMenu = function () {
            $mdSidenav('left').toggle()
                    .then(function () {
                       
                    });
        };

        $scope.openRaincheckForm = function () {
            $mdSidenav('left').close()
                    .then(function () {
                        $state.go('app.saleitems');
                    });
        };

        $scope.barcodeScanner = function () {
            $mdSidenav('left').close()
                    .then(function () {
                        $state.go('app.barcode');
                    });
        };

        $scope.signout = function () {
            $mdSidenav('left').close()
                    .then(function () {
                        appapi.signout();
                    });
        };
    }
})();