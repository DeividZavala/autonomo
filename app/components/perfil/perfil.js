(function(){
	let perfil = {
		templateUrl:'app/components/perfil/index.html',
		controller:perfilController
	}
	function perfilController(){
		let self = this;
	}



	angular
		.module('autonomo')
		.component('perfilComponent', perfil);

})();
