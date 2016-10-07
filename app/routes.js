(function () {
    angular
        .module('autonomo')
        .config(routes)

        .run(["$rootScope", "$location", function($rootScope, $location) {
          $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
              $location.path("/");
            }
          });
        }])
        .factory("Auth", ["$firebaseAuth",
          function($firebaseAuth) {
            return $firebaseAuth();
          }])
        ;


    routes.$inject = ['$routeProvider'];
    function routes($routeProvider) {
        $routeProvider
            .when('/',{
                template:`<landing-component></landing-component>`
            })
            .when('/cotizacion/',{
                template: `<catalogo-component></catalogo-component>`
                })
            .when('/perfil/',{
                template: `<perfil-component></perfil-component>`,
                resolve: {
                  // controller will not be loaded until $waitForSignIn resolves
                  // Auth refers to our $firebaseAuth wrapper in the factory below
                  "currentAuth": ["Auth", function(Auth) {
                    // $waitForSignIn returns a promise so the resolve waits for it to complete
                    return Auth.$requireSignIn();
                  }]
                }
                })
            .when('/mensualidad/:id',{
                template: `<month-component></month-component>`
                })

            .when('/login',{
                template:`<login-component></login-component>`
            })
            .otherwise({
                redirectTo: '/'
            });

            }
})();