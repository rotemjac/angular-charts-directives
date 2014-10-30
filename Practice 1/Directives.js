
	myApp.directive('chartWrapper', function($timeout,$location, $routeParams,logicService) {
		  return {
		      restrict: 'E',
		      replace:false,
		      template:  '<chart> </chart>',
		      scope: {
		      	'typeSelected' : '@chartType'
		      },
		      link: function ($scope,$element, $attrs) {
		      	
		      	//This model is being passed by reference as the 3rd parameter in the 'setLevelData' method and is being populated there
		      	$scope.dataModel = {
		      			currentLevel : undefined,
		      			routeName : undefined,
		      			scopeNumber : undefined
		      	}
  			      	
		      	/* --- Determine which level i'm --- */
		      	$scope.setLevelData = function () {
		      		logicService.getCurrentLevel($routeParams.routeName,
		      									 $routeParams.scopeNumber,
		      									 $scope.dataModel);	      		
		      	}();
		      	
		      	/* --- Route to the relevant view --- */				      	
		      	$scope.getRelevantView = function (param) {		      			
						var newUrl = logicService.getNextUrl($scope.dataModel,param);	  		
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


	myApp.directive('chart', function($timeout,dataService) {
		  return {
		      restrict: 'E',
		      replace:true,
		      //template: "<div ac-chart='"bar"' ac-data='data' ac-config='config' class='col-md-8 column well chart'></div>",
		      templateUrl:  'templates/directiveTemplates/chart.html', 
			  link: function ($scope,$element, $attrs) {
			  	  
				  	  // -a--------------------------------- //					  
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
	
