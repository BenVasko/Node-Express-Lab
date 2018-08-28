"use strict";
function CartService($http) {
  const vm = this;
  vm.getAllItems = () => {
    return $http({
      url: "/cart-items",
      method: "GET"
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
      return vm.cart;
    });
  };
  vm.postToCart = () => {
    return $http({
      url: "/cart-items",
      method: "POST"
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
      return vm.cart;
    });
  };
  vm.updateItemInCart = () => {
    return $http({
      url: "/cart-items",
      method: "PUT",
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
      return vm.cart;
    });
  };
  vm.deleteItemInCart = () => {
    return $http({
      url: "/cart-items",
      method: "DELETE",
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
      return vm.cart;
    });
  };
}

angular
  .module("App")
  .service("CartService", CartService);