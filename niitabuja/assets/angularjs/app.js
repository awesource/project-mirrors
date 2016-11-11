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
.controller("mainController", function($scope, $sce){
	$scope.trust = function(url){
		return $sce.trustAsResourceUrl(url);
	}
})

.controller("courseController", function($scope, $http){

	$http.get("http://public.niitabuja.com/course-list.php").then(function(success){
		$scope.courseList = success.data;
	}, function(error){
		console.log("error", error);
	});

	// $scope.courseList = [
	// 	{"title":".NET Something Something", "description":"Bla bla bla", "icon":"icon-screen"},
	// 	{"title":".NET Something Something", "description":"Bla bla bla", "icon":"icon-screen"},
	// 	{"title":".NET Something Something", "description":"Bla bla bla", "icon":"icon-screen"}
	// ];

	$scope.clearTime = function(index){
		if (index % 3 == 0){
			return true;
		}
		return false;
	}
})