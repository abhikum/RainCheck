(function () {
    'use strict';
    angular.module('raincheckstore').factory('appapi', ['$state', '$mdToast', '$animate', appapi]);

    function appapi($state, $mdToast, $animate) {

        var azureclient;

        function signin() {
            azureclient = new WindowsAzure.MobileServiceClient(
                    "https://raincheck.azure-mobile.net",
                    "IrNEXcWabnOAWjasDZVjAcBUDikVRx71"
                );

            azureclient.login("aad").then(function (response) {               
                $state.go('app.saleitems');
            }, function (error) {
                console.log("error encountered during sign-in. Error: " + error.message);
            });
        };

        function submitRainCheck(raincheck) {
            var raincheckTable = azureclient.getTable('raincheck');
            raincheckTable.insert(
                {
                    itemname: raincheck.itemname,
                    quantity: raincheck.qty,
                    saleprice: raincheck.saleprice,
                    regularprice: raincheck.regularprice,
                    firstname: raincheck.fullname,
                    lastname: raincheck.fullname,
                    email: raincheck.email,
                    iscompleted: false
                }
                ).then(function (response) {
                    showToast('Raincheck submitted successfully!', 2000);
                    $state.go('app.saleitems');
                }, function (error) {
                    showToast('Error: ' + error.message, 6000);
                });
        };

        function showToast(message, hideDelay) {
            $mdToast.show(
                    $mdToast.simple()
                      .content(message)
                      .position('top right')
                      .hideDelay(hideDelay)
                  );
        };

        function getsaleitem(callback) {
            var saleitemTable = azureclient.getTable('saleitems');

            saleitemTable.read()
            .done(function (results) {
                callback(results);
            }, function (error) {

            });
        };

        function signout() {
            if (azureclient) {
                azureclient.logout();
                $state.go('sign-in');
            }            
        };
        
        return {
            signin: signin,
            signout: signout,
            submitRainCheck: submitRainCheck,
            getsaleitem: getsaleitem
        };        
    };
})();