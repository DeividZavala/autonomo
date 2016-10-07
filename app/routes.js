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
<<<<<<< HEAD

            .when('/plazos/',{
=======
            .when('/mensualidad/:id',{
>>>>>>> a4190162f2205c2f2f757f338f72a05a8c9ce0ba
                template: `<car-component></car-component>`
                })

            }
})();