(function(){

	var confirm = {
		templateUrl:'app/components/confirm/confirm.html',
		controller:confirmController
	}
	
	confirmController.$inject = ['$routeParams','$firebaseAuth','$firebaseArray'];
	function confirmController($routeParams,$firebaseAuth,$firebaseArray){
		var self = this;
		console.log($routeParams.id);
		console.log($routeParams.plazo);
		self.cotizacion = {
			auto:$routeParams.id,
			plazo:$routeParams.plazo
		};

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

		self.logIn = function(){
		self.auth.$signInWithPopup("google")
		.then(function(result) {
		  console.log("Signed in as:", result.user.uid);
		  // window.location.replace("/#/perfil");
		  self.user = {
		  	id:result.user.uid,
		  	displayName:result.user.displayName,
		  	email:result.user.email,
		  	photoURL:result.user.photoURL
		  }

		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		  self.user = false;
		});
		return self.user;

		} //fin login

		self.guardaCoche = function(){
			self.gCoche = {
				user:self.user.id,
				auto:self.cotizacion.auto,
				plazo:self.cotizacion.plazo
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
		

	}

	angular
		.module('autonomo')
		.component('confirmComponent',confirm);




})();