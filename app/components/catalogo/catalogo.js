(function(){


	var catalogo ={

		controller : CatalogoController,
		templateUrl: 'app/components/catalogo/index.html'
	}

	function CatalogoController(Api_service,$http){

		var self = this;

		
	/*	Api_service.alls().then(function(response){

			self.data = response.data;

			console.log(self.data);

		})*/

		self.objeto =[];




		var peticion  = function(){


			$http({

			method: 'GET',
			url: 'http://localhost:8000/autos.json',
			


		}).then(function(response){

			self.data = response.data.autos;
			console.log(self.data);

			
		})




		}


		peticion();

		

		

		

	}

	angular

		.module('autonomo')
		.component('catalogoComponent', catalogo);



})();