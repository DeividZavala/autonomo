(function(){


	let catalogo ={

		controller : CatalogoController,
		templateUrl: 'app/components/catalogo/index.html'
	}

	function CatalogoController(Api_service){

		let auto = this;

		
		Api_service.alls().then(function(response){

			auto.data = response.data;

			console.log(auto.data);

		})


	}

	angular

		.module('autonomo')
		.component('catalogoComponent', catalogo);



})();