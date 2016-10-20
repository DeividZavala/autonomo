(function(){
	var paym = {
		templateUrl: 'app/components/payment/payment.html',
		controller: paymentController
	}

	function paymentController($scope, $http){
		var self = this;
		self.data = [];

		console.log("Hola");

		$scope.collapseNow = 1;

		$scope.SetTab = function(num){
			console.log("Entro");
			$scope.collapseNow = num;				

		}

		$scope.validTab = function(numColl){


			return  $scope.collapseNow == numColl;

		}

		/*self.func = function(){


		
		}

		self.func();*/
		$http({
			method: 'GET',
			url: 'http://localhost:8000/autos.json',

		}) .then(function successCallback(response){
			self.data = response.data;

			console.log(self.data.autos[1]);
			}, function errorCallback(response){
			console.log(response);
		});

		console.log("sdfghjk,l");
		console.log(self.data);



	}



	angular
		.module('autonomo')
		.component('paymentComponent', paym);

})();