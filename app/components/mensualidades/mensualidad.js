(function(){
	let car = {
		controller: CarController,
		templateUrl: 'app/components/mensualidades/mensualidad.html'
	}


	CarController.$inject=['$routeParams','$http'];
	function CarController($routeParams,$http){
		let cars = this;
		cars.auto = $routeParams.id;

		$http({
			method: 'GET',
			url: 'http://54.244.191.132/topten/'

		}).then(function(response){
			cars.data = response.data;
			console.log(cars.data)
		});

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab; 
		};
		
	}

	angular
		.module('autonomo')
		.component('carComponent', car);
})();