"use strict";
const cartItems = {
  templateUrl: `./js/cart-items/cart-items.html`,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.cart = response;
    });
    vm.add = (item) => {
      CartService.addItem(item).then(() => {
        CartService.getAllItems().then((response) => {
          vm.cart = response;
        });
      });
    }
    vm.update = (item, id) => {
      CartService.updateItem(item, id).then(() => {
        CartService.getAllItems().then((response) => {
          vm.cart = response;
        });
      });
    }
    vm.delete = (id) => {
      CartService.removeItem(id).then(() => {
        CartService.getAllItems().then((response) => {
          vm.cart = response;
        });
      });
    }
  }]
};

angular
  .module("App")
  .component("cartItems", cartItems);