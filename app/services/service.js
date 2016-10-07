(function(){
	angular
		.module('autonomo')
		.factory('Api_service', all_function);

		all_function.$inject = ['$http'];
		function all_function($http){
			return {
				alls:function(){
					return $http.get('http://54.244.191.132/topten/');
				}
			}
		};
})();