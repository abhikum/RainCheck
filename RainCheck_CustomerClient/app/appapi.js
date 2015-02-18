(function () {
    'use strict';
    angular.module('raincheck_customer').factory('appapi', ['$state', '$mdToast', '$animate', appapi]);

    function appapi($state, $mdToast, $animate) {

        var azureclient;

        function signin(authProvider) {
            azureclient = new WindowsAzure.MobileServiceClient(
                    "https://raincheck.azure-mobile.net",
                    "IrNEXcWabnOAWjasDZVjAcBUDikVRx71"
                );

            if (authProvider === "google") {
                azureclient.login("google").then(function (response) {
                    $state.go('app.raincheck');
                }, function (error) {
                    console.log("error encountered during sign-in using Google Auth. Error: " + error.message);
                });
            }
            else if (authProvider === "twitter") {
                azureclient.login("twitter").then(function (response) {
                    $state.go('app.raincheck');
                }, function (error) {
                    console.log("error encountered during sign-in using Twitter Auth. Error: " + error.message);
                });
            }
        };

       
        function getRainCheck(callback) {
           
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
            getRainCheck: getRainCheck
        };
    };
})();