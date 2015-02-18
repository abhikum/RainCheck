(function () {
    'use strict';

    angular.module('raincheckstore').controller('barcodeScannerCtrl', ['$scope', '$cordovaBarcodeScanner', 'appapi', barcodeScannerCtrl]);

    function barcodeScannerCtrl($scope, $cordovaBarcodeScanner, appapi) {
        var vm = this;
        $scope.scanBarcode = function () {
            $cordovaBarcodeScanner.scan().then(function (imageData) {
                vm.results = imageData;
                var barcode = vm.results.text.split(";");
                alert(vm.results.text);
                $state.go('app.raincheckform', { itemname: barcode[0], saleprice: barcode[1], regularprice: barcode[2]});               
            }, function (err) {
                alert("Error scanning: " + err);
            });
        };

    }
})();