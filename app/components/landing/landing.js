(function(){
	let landing = {
		templateUrl:'app/components/landing/index.html',
		controller:landingController
	}
	function landingController(){
		let self = this;
	}
	angular
		.module('autonomo')
		.component('landingComponent', landing);
})();
