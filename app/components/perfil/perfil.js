(function(){
	let perfil = {
		templateUrl:'app/components/perfil/index.html',
		controller:perfilController
	}
	function perfilController($firebaseAuth,Api_service,$firebaseArray){
		let self = this;

		self.user = {};
		self.listaCoches = [];
		self.auth = $firebaseAuth();

		self.auth.$onAuthStateChanged(function(user) {
		  if (user) {
		    self.user = {
			  	id:user.uid,
			  	displayName:user.displayName,
			  	email:user.email,
			  	photoURL:user.photoURL
		  };

		  	var ref = firebase.database().ref();
    		var cocheraRef = ref.child("cochera");
			var query = cocheraRef.orderByChild('user').equalTo(self.user.id);
			console.log(query);
			var list = $firebaseArray(query);
			console.log(list);
			list.$loaded()
			    .then(function(){
			        angular.forEach(list, function(lista) {
			            console.log(lista);
			           	self.listaCoches.push({
			           		auto:lista.auto,
			           		plazo:lista.plazo,
			           		user:lista.user
			           	}); 
			        })
			    });
			


		  } else {
		    console.log("Signed out");
		  }
		});

		Api_service.alls().then(function (response) {
			self.userCars = response.data
		});

		
			
		
		// Recupera sus coches
		
		// Recupera sus coches



	}



	angular
		.module('autonomo')
		.component('perfilComponent', perfil);

})();
