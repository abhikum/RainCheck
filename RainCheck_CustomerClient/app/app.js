angular.module(("raincheck_customer"), ['ui.router', 'ngMaterial'])

.config(function ($stateProvider, $urlRouterProvider) {
  
    $stateProvider

    .state('app', {
        abstract: true,
        url: "/app",
        templateUrl: "app/layout/layout.html"
    })

    .state('app.raincheck', {
        url: "/raincheck",
        views: {
            'raincheck-view': {
                templateUrl: "app/raincheck/raincheck-list.html"
            }
        }
     })
    
     .state('sign-in', {
         url: "/sign-in",
         templateUrl: "app/auth/login.html"
     });

    $urlRouterProvider.otherwise('sign-in');
})