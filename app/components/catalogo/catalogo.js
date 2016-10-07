(function(){


	let catalogo ={

		controller : CatalogoController,
		templateUrl: 'app/components/catalogo/index.html'
	}

	function CatalogoController($http){

		let auto = this;

		$http({
			method : 'GET',
			url: 'http://54.244.191.132/topten'
		})
		.then(function(response){

			auto.data = response.data;

			console.log(auto.data);

		})


	}

	angular

		.module('autonomo')
		.component('catalogoComponents', catalogo);



})();