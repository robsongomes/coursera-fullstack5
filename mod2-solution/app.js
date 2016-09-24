(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['$scope','ShoppingListCheckOffService'];
  function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buy = function(index) {
      ShoppingListCheckOffService.itemBought(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['$scope','ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = initialItems();
    var bought = [];

    service.itemBought = function(index) {
      bought.push(toBuy[index]);
      toBuy.splice(index,1);
    }

    service.getBoughtItems = function() {
      return bought;
    }

    service.getToBuyItems = function() {
      return toBuy;
    }

  }

  function initialItems() {
    return [
      {name: 'Cookies', quantity: 5},
      {name: 'Muffins', quantity: 6},
      {name: 'Tortillas', quantity: 4},
      {name: 'Bread', quantity: 10}
    ];
  }

}());
