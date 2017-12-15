var app = angular.module('smartClassApp', []);
			app.controller('smartClassCtrl', function($scope,$http) {
			$scope.carouselExampleIndicators = true;
			$scope.HomeCarousel=true;
			$scope.loadCourseData= function(CourseTemplate){
				switch(CourseTemplate){
				case "firstYear":
					closeAllTemplate();
					$scope.showFirstCourse = true;
				
					break;
				case "Gate":
					closeAllTemplate();
					$scope.showGateCourse = true;
				
					break;
				case "GRE":
					closeAllTemplate();
					$scope.showGRECourse = true;
					break;
				case "home":
					closeAllTemplate();
					$scope.carouselExampleIndicators = true;
					$scope.HomeCarousel=true;
					break;

					case "IIT-JEE":
					closeAllTemplate();
					$scope.showJEECourse=true;
					break;
					
					case "NEET":
					closeAllTemplate();
					$scope.showNEETCourse=true;
					break;

					default:
				}
				
			}
			function closeAllTemplate(){
					$scope.showGateCourse = false;
					$scope.showFirstCourse = false;
					$scope.showGRECourse = false;
					$scope.carouselExampleIndicators = false;
					$scope.HomeCarousel=false;
					$scope.showJEECourse=false;
					$scope.showNEETCourse=false;
			}
			 
});