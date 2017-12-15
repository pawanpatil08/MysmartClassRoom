var app = angular.module('smartClassApp', []);
			app.controller('smartClassCtrl', function($scope,$http) {
			$scope.carouselExampleIndicators = true;

			$scope.loadCourseData= function(CourseTemplate){
				switch(CourseTemplate){
				case "firstYear":
					$scope.showFirstCourse = true;
					$scope.carouselExampleIndicators = false;

				case "Gate":
					$scope.showGateCourse = true;
					$scope.carouselExampleIndicators = false;

				case "GRE":
					$scope.showGRECourse = true;
					$scope.carouselExampleIndicators = false;	
				}
				
			}
			$scope.hideCarousel= function(){
				$scope.carouselExampleIndicators = false;
				$scope.showCourse = true;
			}
				
});