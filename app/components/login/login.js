(function(){

	let login = {
	templateUrl:'app/components/login/index.html',
	controller:loginController
	}

	function loginController($firebaseAuth){
		var self = this;

		

	}

	angular
		.module('autonomo')
		.component('loginComponent',login)
		;







})();