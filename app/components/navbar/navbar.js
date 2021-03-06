(function(){
	var navbar = {
		templateUrl:'app/components/navbar/index.html',
		controller:navbarController
	}
	function navbarController($firebaseAuth){
		var self = this;
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

		  	 console.log("loged");
		  } else {
		  	self.user = false;
		    console.log("Signed out");
		  }
		});

		self.logIn = function(){
				self.auth.$signInWithPopup("google").then(function(result) {

				  		    console.log("Signed in as:", result.user.uid);
						    self.user = {
										  	id:result.user.uid,
										  	displayName:result.user.displayName,
										  	email:result.user.email,
										  	photoURL:result.user.photoURL
						  }

				}).catch(function(error) {
				  console.error("Error de Authentication :", error);
				  self.user = false;
				});
				return self.user;

	} //fin login

	self.logOut = function(){
		self.auth.$signOut()
		self.user = false;
		// window.location.replace("/");
	} //cerrar sesión

	}
	angular
		.module('autonomo')
		.component('navbarComponent',navbar);

})();