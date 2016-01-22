'use strict';

/* App Module */
angular.module("myApp", [])
.controller("CartController", ["$scope", function($scope){
	$scope.items = [
		{
			title: "Paint Pots",
			quantity: 8,
			price: 3.9
		},
		{
			title: "Paint Pots2",
			quantity: 17,
			price: 3.9
		},
		{
			title: "Paint Pots3",
			quantity: 10,
			price: 3.9
		},
		{
			title: "Paint Pots4",
			quantity: 5,
			price: 3.9
		},
		{
			title: "Paint Pots5",
			quantity: 14,
			price: 3.9
		}
	];
}]);