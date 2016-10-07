(function(){
	let navbar = {
		templateUrl:'app/components/navbar/index.html',
		controller:navbarController
	}
	function navbarController($firebaseAuth){
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
		  console.error("Authentication failed:", error);
		  self.user = false;
		});
		return self.user;

	} //fin login

	self.logOut = function(){
		self.auth.$signOut()
		self.user = false;
	} //cerrar sesión

	}
	angular
		.module('autonomo')
		.component('navbarComponent',navbar);

})();