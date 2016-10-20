(function(){
	var footer = {
		templateUrl:'app/components/footer/index.html',
		controller:footerController
	}
	function footerController(){
		var self = this;
	}
	angular
		.module('autonomo')
		.component('footerComponent', footer);
})();
