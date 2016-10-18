(function(){
	var paym = {
		templateUrl: 'app/components/payment/payment.html',
		controller: paymentController
	}

	function paymentController($scope){
		console.log("Hola");

		$scope.collapseNow = 1;

		$scope.SetTab = function(num){
			console.log("Entro");
			$scope.collapseNow = num;				

		}

		$scope.validTab = function(numColl){


			return  $scope.collapseNow == numColl;

		}
	}

	angular
		.module('autonomo')
		.component('paymentComponent', paym);

})();