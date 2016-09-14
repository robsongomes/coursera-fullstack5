angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.check = function() {
    //I'm considering empty as an item
    if ($scope.dishes === '') {
      $scope.message = 'Please enter data first';
    }
    if ($scope.dishes.split(',').length <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  }
}
