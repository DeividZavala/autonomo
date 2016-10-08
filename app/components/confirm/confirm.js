(function(){

	let confirm = {
		templateUrl:'app/components/confirm/confirm.html',
		controller:confirmController
	}
	
	confirmController.$inject = ['$routeParams','$firebaseAuth'];
	function confirmController($routeParams,$firebaseAuth){
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
		  window.location.replace("/#/perfil");
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
		

	}

	angular
		.module('autonomo')
		.component('confirmComponent',confirm);




})();