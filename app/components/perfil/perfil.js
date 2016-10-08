(function(){
	let perfil = {
		templateUrl:'app/components/perfil/index.html',
		controller:perfilController
	}
	function perfilController($firebaseAuth,Api_service){
		let self = this;

		self.user = {}
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
		});

		Api_service.alls().then(function (response) {
			self.userCars = response.data
		})


	}



	angular
		.module('autonomo')
		.component('perfilComponent', perfil);

})();
