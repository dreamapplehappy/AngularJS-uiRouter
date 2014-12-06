var myModule = angular.module("myModule", ['ngAnimate','ui.router']);

myModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('form',{
			url:'/form',
			templateUrl:'form.html',
			controller:'myFormController'
		})
		.state('form.required',{
			url:'/required',
			templateUrl:'form-required.html'
		})
		.state('form.optional',{
			url:'/optional',
			templateUrl:'form-optional.html'
		})
		.state('form.confirm',{
			url:'/confirm',
			templateUrl:'form-confirm.html'
		});

		$urlRouterProvider.otherwise('/form/required');
}]);

myModule.controller('myFormController', ['$scope', function($scope){
	$scope.formData = {};
	$scope.submit = function() {
		alert("Cool, you have registered!");
	};
}]);