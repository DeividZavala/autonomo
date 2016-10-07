(function(){

	let navbar = {
		templateUrl:'app/components/navbar/index.html',
		controller:navbarController
	}

	function navbarController(){
		let self = this;
	}


	angular
		.module('autonomo')
		.component('navbarComponent',navbar);

})();