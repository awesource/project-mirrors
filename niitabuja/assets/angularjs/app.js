angular.module('site', [
	'ngRoute',
	'ngStorage',
])

.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: "pages/home.html"
	})
	.when('/courses', {
		templateUrl: "pages/course-catalog.html"
	})
	.when('/contact', {
		templateUrl: "pages/contact.html"
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
})