(function()
{
	var app = angular.module('myApp',[]);
	app.controller('interestCalculator', function($scope)
	{
		$scope.interesttype = ["Simple Interest", "Compound Interest"];
		$scope.frequencytype = ["Annualy","Half-Yearly","Quarterly","Monthly"];
		$scope.principal = 0;
		$scope.rate = 0;
		$scope.time = 0;
		var  grandTotal = 0;
		result = document.getElementById("result");



		$scope.total = function()
		{
			if($scope.selectedType == "Simple Interest")
			{
				grandTotal =  ( $scope.principal *  $scope.time * $scope.rate / 100) ;
				grandTotal = grandTotal +  parseInt($scope.principal);
				grandTotal = grandTotal.toFixed(2);
				var interestOnly = grandTotal - $scope.principal;
				interestOnly = interestOnly.toFixed(2);
				result.innerHTML = "The total amount is " + grandTotal +"<br/>";
				result.innerHTML = result.innerHTML + "<br/> Interest is " + interestOnly ;
				return grandTotal;
			}
			else 
			{
				console.log("Selected frequency: "+ $scope.selectedFrequency);
				switch ($scope.selectedFrequency) 
				{
					case "Annualy":
					$scope.rate = $scope.rate/1;
					$scope.time = $scope.time*1;
					break;
					
					case "Half-Yearly":
					$scope.rate = $scope.rate/2;
					$scope.time = $scope.time*2;
					break;
					
					case "Quarterly":
					$scope.rate = $scope.rate/4;
					$scope.time = $scope.time*4;
					break;
					
					case "Monthly":
					$scope.rate = $scope.rate/12;
					$scope.time = $scope.time*12;
					break;
				}
				grandTotal = $scope.principal * Math.pow((1 + ($scope.rate / 100)) , $scope.time);
				var interestOnly = grandTotal - $scope.principal;
				grandTotal = grandTotal.toFixed(2);
				interestOnly = interestOnly.toFixed(2);
				result.innerHTML = "The total amount is " + grandTotal +"<br/>";
				result.innerHTML = result.innerHTML + "<br/>Interest is " + interestOnly ;
				return grandTotal;
			}
		}
	});
})();
