(function(){
	let car = {
		controller: CarController,
		templateUrl: 'app/components/mensualidades/mensualidad.html'
	}


	CarController.$inject=['$routeParams','$http'];
	function CarController($routeParams,$http){
		let cars = this;
		cars.auto = $routeParams.id;
		console.log(cars.auto)

		$http({
			method: 'GET',
			url: 'http://54.244.191.132/topten/'+cars.auto

		}).then(function(response){
			cars.data = response.data;
			console.log(cars.data)
		});
		cars.monthCar = function(meses){
			mensualidad = meses;
			month=cars.data.precio/mensualidad;
			console.log(month)
			return month;
		};
		cars.feeCar = function(){
			fee=cars.data.precio*.01;
			console.log(fee)
			return fee;
		};

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