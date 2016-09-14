angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.check = function() {
    //I'm considering empty as an item
    if ($scope.dishes == undefined || $scope.dishes.trim() === '') {
      $scope.message = 'Please enter data first';
    } else if ($scope.dishes.split(',').length <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  }
}
