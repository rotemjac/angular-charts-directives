


myApp.service('logicService', function() {
return {
		   getCurrentLevel: function (routeName,scopeNumber, resObj) {
			      		if (routeName == undefined) {
			      			resObj.currentLevel = 'Routes';
			      		}
			      		else if (scopeNumber == undefined) {
			      			resObj.currentLevel = 'Route';
			      			resObj.routeName = routeName;
			      		}
			      		else {
			      			resObj.currentLevel = 'Scope';
			      			resObj.routeName = routeName;
			      			resObj.scopeNumber = scopeNumber;
			      		}
			},

		   getNextUrl: function (dataModel ,param) {
						if (dataModel.currentLevel == 'Routes') {
			      			 //This didn't work (in the controller of course)..
			      			 //newUrl = $location.absUrl()+"/scopesView/"+param;
			      			 newUrl = "scopesView/"+param;
			      		}
			      		else if (dataModel.currentLevel == 'Route') {
			      			 newUrl = "scopeView/"+dataModel.routeName+"/"+param;
			      		}
			      		return newUrl;
			}
}
});

myApp.service('dataService', function() {
		
		/* --------------------------------------------------------------------- */
		
		var  phaseArr = [200, 100, 300];

		var phaseDataForRoutes =	{
				    series: ['Compile phase', 'Link phase', 'Digest phase'],
				    data: [
					    {
					      x: "Route1",
					      y: phaseArr,
					      tooltip: "Route1: [" +phaseArr + "]"
					    },
					    {
					      x: "Route2",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    },  
					    {
					      x: "Route3",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    },
					    {
					      x: "Route4",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    }, 
					    {
					      x: "Route5",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    },
					    {
					      x: "Route6",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    }, 
					    {
					      x: "Route7",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    },
					    {
					      x: "Route8",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    }, 
					    {
					      x: "Route9",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    }, 		
					    {
					      x: "Route10",
					      y: [200, 100, 300],
					      tooltip: "Route1: [" +phaseArr + "]"
					    }, 						    				    					    					    
				    ]
		};
		var  scopeArr = [50, 4];
		var  scopeDataForRoutes =	{
				    series: ['Number of scopes', 'Depth of scope tree'],
				    data: [
					    {
					      x: "Route1",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    },
					    {
					      x: "Route2",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    },  
					    {
					      x: "Route3",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    },
					    {
					      x: "Route4",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    }, 
					    {
					      x: "Route5",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    },
					    {
					      x: "Route6",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    }, 
					    {
					      x: "Route7",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    },
					    {
					      x: "Route8",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    }, 
					    {
					      x: "Route9",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    }, 		
					    {
					      x: "Route10",
					      y: scopeArr,
					      tooltip: "Route1: [" +scopeArr + "]"
					    }						    				    					    					    
				    ]
		}

		var  scopeArr2 = [30];
		var  scopeDataForRoute =	{
				    series: ['Number of watchers'],
				    data: [
					    {
					      x: "scope1",
					      y: scopeArr2,
					      tooltip: "scope1: [" +scopeArr2 + "]"
					    },
					    {
					      x: "scope2",
					      y: scopeArr2,
					      tooltip: "scope2: [" +scopeArr2 + "]"
					    },  
					    {
					      x: "scope3",
					      y: scopeArr2,
					      tooltip: "scope3: [" +scopeArr2 + "]"
					    },
					    {
					      x: "scope4",
					      y: scopeArr2,
					      tooltip: "scope4: [" +scopeArr2 + "]"
					    }, 
					    {
					      x: "scope5",
					      y: scopeArr2,
					      tooltip: "scope5: [" +scopeArr2 + "]"
					    },
					    {
					      x: "scope6",
					      y: scopeArr2,
					      tooltip: "scope6: [" +scopeArr2 + "]"
					    }, 
					    {
					      x: "scope7",
					      y: scopeArr2,
					      tooltip: "scope7: [" +scopeArr2 + "]"
					    },
					    {
					      x: "scope8",
					      y: scopeArr2,
					      tooltip: "scope8: [" +scopeArr2 + "]"
					    }, 
					    {
					      x: "scope9",
					      y: scopeArr2,
					      tooltip: "scope9: [" +scopeArr2 + "]"
					    }, 		
					    {
					      x: "scope10",
					      y: scopeArr2,
					      tooltip: "scope10: [" +scopeArr2 + "]"
					    }						    				    					    					    
				    ]
		}
		
		/* --------------------------------------------------------------------- */
		
		var getRoutesPhaseData = function() {
			return phaseDataForRoutes;
		}
		var getRoutesScopeData = function () {
			return scopeDataForRoutes;
		}
		var getRouteData = function () {
			return scopeDataForRoute;
		}
		var getScopeData = function () {
			return scopeDataForRoute;
		}
		
		
		return {

			getDataByType: function (chartEntered) {
				var res = {
					title : 'Error!',
					data  : 'No data!'
				} 
				
				switch(chartEntered) {			    
				    case "Routes_Phases":
				        	res.title = 'Phases duration';
						  	res.data =   getRoutesPhaseData();
				        	break;
				    case "Routes_Scope":
							res.title = 'Scope data';
							res.data =   getRoutesScopeData();
				        	break;
				    case "Route_Scopes":
							res.title = 'Scopes for current route';
							res.data =   getRouteData();
				        	break;				
				    case "ScopeView_Watchers":
							res.title = 'Data for current scope';
							res.data =   getScopeData();
				        	break;
				}	
				return res;
			}
		}

});

