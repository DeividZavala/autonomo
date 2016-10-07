(function(){
	let car = {
		controller: CarController,
		templateUrl: 'app/components/mensualidades/mensualidad.html'
	}

	function CarController($http){
		let cars = this;

		$http({
			method: 'GET',
			url: 'http://54.244.191.132/topten/'

		}).then(function(response){
			cars.data = response.data;
			console.log(cars.data)
		});
	}

	angular
		.module('autonomo')
		.component('carComponent', car);
})();