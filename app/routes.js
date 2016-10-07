(function () {
    angular
        .module('autonomo')
        .config(routes);

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
                template: `<perfil-component></perfil-component>`
                })
            .when('/mensualidad/:id',{
                template: `<car-component></car-component>`
                })
            .otherwise({
                redirectTo: '/'
            });
            }
})();