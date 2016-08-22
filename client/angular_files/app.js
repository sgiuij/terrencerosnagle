(function(){
	'use strict';

	angular
		.module('myApp',['ngRoute'])
		.config(config)
	function config($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'angular_files/partials/index.html'
		})
		.when('/products',{
			templateUrl:'angular_files/partials/products.html'
		})
		.when('/customers',{
			templateUrl:'angular_files/partials/customers.html'
		})
		.when('/orders',{
			templateUrl:'/angular_files/partials/orders.html'
		})
		.otherwise({
			redirectTo:'/'
		})
	}

})()