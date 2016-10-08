(function(){
	let about = {
		templateUrl:'app/components/about/index.html',
		controller:aboutController
	}
	function aboutController(){
		let self = this;
	}
	angular
		.module('autonomo')
		.component('aboutComponent', about);
})();
