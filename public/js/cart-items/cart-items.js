"use strict";
const cartItems = {
  templateUrl: `./js/cart-items/cart-items.html`,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.cart = response;
    });
  }]
};

angular
  .module("App")
  .component("cartItems", cartItems);