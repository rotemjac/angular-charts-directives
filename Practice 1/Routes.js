
myApp.config(function($routeProvider , $locationProvider) {
	
	$routeProvider.when('/home',
		{
			templateUrl:'./templates/routeTemplates/mainView.html'
		}

	)
	.when('/scopesView/:routeName',
		{
			templateUrl:'./templates/routeTemplates/scopesView.html'
		}
		
	)
	.when('/scopeView/:routeName/:scopeNumber',
		{
			templateUrl:'./templates/routeTemplates/insideScopeView.html'
		}
		
	)
	.otherwise({redirectTo: '/home'});
	
	//No need for this..
	//$locationProvider.html5Mode(true);

});
	

