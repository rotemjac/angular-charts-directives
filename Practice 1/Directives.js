
	myApp.directive('chartWrapper', function($timeout,$location, $routeParams) {
		  return {
		      restrict: 'E',
		      replace:false,
		      template:  '<chart> </chart>',
		      scope: {
		      	'typeSelected' : '@chartType'
		      },
		      link: function ($scope,$element, $attrs) {
		      			      	
		      	/* --- Determine which level i'm --- */
		      	$scope.setLevelData = function () {
		      		
		      		var routeName = $routeParams.routeName;
		      		
		      		if (routeName == undefined) {
		      			$scope.level = 'Routes';
		      		}
		      		else if ($routeParams.scopeNumber == undefined) {
		      			$scope.level = 'Route';
		      			$scope.routeName = routeName;
		      		}
		      		else {
		      			$scope.level = 'Scope';
		      			$scope.routeName = routeName;
		      			$scope.scopeNumber = $routeParams.scopeNumber;
		      		}		      		
		      	}();
		      	
		      	/* --- Route to the relevant view --- */
		      	
		      	
		      	$scope.getRelevantView = function (param) {
		      		var newUrl;

			      		if ($scope.level == 'Routes') {
			      			 //This won't work..
			      			 //newUrl = $location.absUrl()+"/scopesView/"+param;
			      			 newUrl = "scopesView/"+param;
			      		}
			      		else if ($scope.level == 'Route') {
			      			 newUrl = "scopeView/"+$scope.routeName+"/"+param;
			      		}	  		
			      		$location.url(newUrl);
			      		$scope.$apply();//We have to perform apply here - don't know why (we're in angular's scope)
		      		
		      	};
		      	
				/* The timeout is in order to make sure this link function is being execute only after the link function of the <chart> directive (it doesn't occur because the delay caused by using 'templateUrl'. I couldn't use the 'template' property because we need to pass the chart type like this: ac-chart='"bar"' , the " with the ' cause problems when trying to make the template inline) */		      	
		      	$timeout(function() {		      	
		      		  $element.find("g.tick").each(function () {		      		  	
		      		  	$( this ).bind( "click",function () {		      		  		
		      		  		$scope.getRelevantView(this.textContent);
		      		  	});
		      		  });		     		
		      	},100);
		      }
		   }
	});


	myApp.directive('chart', function(dataService,$timeout) {
		  return {
		      restrict: 'E',
		      replace:true,
		      //template: "<div ac-chart='"bar"' ac-data='data' ac-config='config' class='col-md-8 column well chart'></div>",
		      templateUrl:  'templates/directiveTemplates/chart.html', 
			  link: function ($scope,$element, $attrs) {
			  	  
				  	  // ---------------------------------- //					  
					  res = dataService.getDataByType($scope.typeSelected);
					  $scope.data  = res.data;
				  	 // ---------------------------------- //
				  	  $scope.chartConfig = {
						    title: res.title,
						    tooltips: true,
						    labels: false,
						    mouseover: function() {},
						    mouseout: function() {},
						    click: function() {console.log("click");},
						    legend: {
						      display: true,
						      //could be 'left, right'
						      position: 'right'
						    }
	  				 };
					// ---------------------------------- //	      	  
			  } 		
		   };
	});
	
