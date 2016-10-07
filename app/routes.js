(function () {
    angular
        .module('autonomo')
        .config(routes);

    routes.$inject = ['$routeProvider'];
    function routes($routeProvider) {
        $routeProvider
            .when('/',{
                template:`<h1>Autonomo index</h1>`
            })
            .when('/cotizacion/',{
                template: `<catalogo-component></catalogo-component>`
                })
            .when('/perfil/',{
                template: `<perfil-component></perfil-component>`
                })
            }
})();