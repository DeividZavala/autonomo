(function(){
	var landing = {
		templateUrl:'app/components/landing/index.html',
		controller:landingController
	}
	function landingController(){
		var self = this;


		 $("#Carousel").carousel({

        interval:4000
    });

	}
	angular
		.module('autonomo')
		.component('landingComponent', landing);
})();
