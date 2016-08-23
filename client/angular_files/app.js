(function(){
	'use strict';

	angular
		.module('myApp',['ngRoute'])
		.config(config)
	function config($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'angular_files/partials/home.html'
		})
		.when('/events',{
			templateUrl:'angular_files/partials/events.html'
		})
		.when('/lessons',{
			templateUrl:'angular_files/partials/lessons.html'
		})
		.when('/biography',{
			templateUrl:'/angular_files/partials/biography.html'
		})
		.when('/booking',{
			templateUrl:'/angular_files/partials/booking.html'
		})
		.when('/contact',{
			templateUrl:'/angular_files/partials/contact.html'
		})
		.otherwise({
			redirectTo:'/'
		})
	}

})()