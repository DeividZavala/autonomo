(function () {
    angular
        .module('autonomo')
        .config(routes)

        .run(["$rootScope", "$location", function($rootScope, $location) {
          $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
              $location.path("/login");
            }else{
              console.log(error);
            }
          });
        }])
        .factory("Auth", ["$firebaseAuth",
          function($firebaseAuth) {
            return $firebaseAuth();
          }])
        .controller('PerroController',function($routeParams){
          console.log($routeParams);
        })
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
                    // return Auth.$waitForSignIn();
                  }]
                          } //resolve
                })
            .when('/mensualidad/:id',{
                template: `<car-component></car-component>`
                })
            .when('/mensualidad/:id/:plazo',{
              template:`<confirm-component></confirm-component>`
  
              // controller:'PerroController',
              // resolve: {
              //     // controller will not be loaded until $waitForSignIn resolves
              //     // Auth refers to our $firebaseAuth wrapper in the factory below
              //     "currentAuth": ["Auth","$routeParams", function(Auth,$routeParams) {
              //       // $waitForSignIn returns a promise so the resolve waits for it to complete
                  
              //         Auth.$requireSignIn()
              //         .then(function(){
              //           console.log($routeParams);
              //         }) 
              //       ;
              //       // return Auth.$waitForSignIn();
              //     }]
              //             } //resolve
            })

            .when('/detailPayment', {
                template: `<payment-component></payment-component>`
            })
            .when('/login',{
                template:`<login-component></login-component>`
            })
            .otherwise({
                redirectTo: '/'
            });

            }

            
            
})();
