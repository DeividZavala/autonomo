(function(){
	let perfil = {
		templateUrl:'app/components/perfil/perfil.html',
		controller:perfilController
	}
	function perfilController(){
		let self = this;
	}

  

	angular
		.module('autonomo')
		.component('perfilComponent', perfil);

})();
