(function(){
	var car = {
		controller: CarController,
		templateUrl: 'app/components/mensualidades/mensualidad.html'
	}


	CarController.$inject=['$routeParams','$http','$firebaseAuth','$firebaseArray'];
	function CarController($routeParams,$http,$firebaseAuth,$firebaseArray){
		var cars = this;
		var self = this;
		cars.tab=2;
		cars.auto = $routeParams.id;
		console.log(cars.auto);
		self.auth = $firebaseAuth();

		self.auth.$onAuthStateChanged(function(user) {
		  if (user) {
		    self.user = {
			  	id:user.uid,
			  	displayName:user.displayName,
			  	email:user.email,
			  	photoURL:user.photoURL
		  }
		  } else {
		    console.log("Signed out");
		  }
		}); //checando el usuario

		/*$http({
			method: 'GET',
			url: 'http://54.244.191.132/topten/'+cars.auto

		})*/
		$http.get('/autos.json').then(function(response){
			cars.data = response.data.autos[cars.auto];
			console.log(cars.data);
			cars.monthCar = function(meses){
			mensualidad = meses;
			month=(cars.data.precio/mensualidad)*1.08;
			console.log(month)
			return month;
		}; //month
		cars.feeCar = function(){
			fee=(cars.data.precio*1.08)*.01;
			console.log(fee)
			return fee;
		};//fee
		});
		
		

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab; 
		};
		
		self.user = {};
		self.cotizacion = {
			auto:$routeParams.id,
			// plazo:self.plazo
		};

		self.guardaCoche = function(meses){
			self.gCoche = {
				user:self.user.id,
				auto:self.cotizacion.auto,
				plazo:meses
			}
			var ref = firebase.database().ref('cochera');
			var list = $firebaseArray(ref);
			list.$add(self.gCoche)
			.then(function(ref) {
			  var id = ref.key;
			  console.log("coche agregado " + id);
			  console.log(list.$indexFor(id)); // returns location in the array
			});
		window.location.replace("/#/perfil");
		}//GuardaCoche



	} //controller

	angular
		.module('autonomo')
		.component('carComponent', car);
})();