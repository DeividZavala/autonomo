(function(){
	var about = {
		templateUrl:'app/components/about/index.html',
		controller:aboutController
	}
	function aboutController(){
		var self = this;
	}
	angular
		.module('autonomo')
		.component('aboutComponent', about);
})();
