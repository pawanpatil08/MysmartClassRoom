var app = angular.module('smartClassApp', []);
			app.controller('smartClassCtrl', function($scope) {
			$scope.carouselExampleIndicators = true;
			$scope.showCarousel= function(){
				$scope.carouselExampleIndicators = true;
			}
			$scope.hideCarousel= function(){
				$scope.carouselExampleIndicators = false;
				$scope.showCourse = true;
			}
				
			});