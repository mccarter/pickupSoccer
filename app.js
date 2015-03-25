angular.module("pickupSoccer", ['ui.router', "firebase", 'pickupSoccer.login', 'pickupSoccer.addNumber']) 
//Now the $firebaseObject, $firebaseArray, and $firebaseAuth services are available to be injected into any controller, service, or factory.

	//using ui-router to route client
.config(function ($stateProvider, $urlRouterProvider) {
		
	$stateProvider
		.state('login', {
			templateUrl: 'views/login/login.html',
			controller: 'LoginController',
			url: '/login'
		})

		.state('addNumber', {
			templateUrl: 'views/add_number/add_number.html',
			controller: 'AddNumberController',
			url: '/addnumber'
		});

	// .state('admin', {
	// 	templateUrl: 'views/text/text.html',
	// 	controller: 'text',
	// 	url: '/text'
	// })

	//if at /groups, render groups.html & use GroupsController for the view's controller reroutes to '/' as default
	$urlRouterProvider.otherwise('/login');
});