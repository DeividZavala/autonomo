(function(){
	let footer = {
		templateUrl:'app/components/footer/index.html',
		controller:footerController
	}
	function footerController(){
		let self = this;
	}
	angular
		.module('autonomo')
		.component('footerComponent', footer);
})();
