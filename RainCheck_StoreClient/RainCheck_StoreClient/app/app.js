angular.module(("raincheckstore"), ['ui.router', 'ngMaterial', 'ngCordova'])

.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
    .primaryColor('deep-orange')
    .accentColor('amber');

    $stateProvider
    .state('app', {
        abstract: true,
        url: "/app",
        templateUrl: "app/layout/layout.html"
    })

    .state('app.raincheckform', {
        url: "/form/:itemname/:saleprice/:regularprice",
        views: {
            'raincheck-view': {
                templateUrl: "app/raincheck/raincheck-form.html"
            }
        }
    })

    .state('app.saleitems', {
        url: "/saleitems",
        views: {
            'raincheck-view': {
                templateUrl: "app/saleitem/saleitem-list.html"
            }
        }
    })

    .state('app.barcode', {
        url: "/barcode",
        views: {
            'raincheck-view': {
                templateUrl: "app/barcode_scan/barcodescanner.html"
            }
        }
    })

    .state('sign-out', {
        url: "/sign-out",
        templateUrl: "app/auth/logout.html"
    })

     .state('sign-in', {
         url: "/sign-in",
         templateUrl: "app/auth/login.html"
     });

    $urlRouterProvider.otherwise('sign-in');
})