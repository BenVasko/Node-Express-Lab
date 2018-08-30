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
  vm.addItem = (item) => {
    return $http({
      url: "/cart-items",
      method: "POST",
      data: item
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
      return vm.cart;
    });
  };
  vm.updateItem = (item, id) => {
    return $http({
      url: "/cart-items/" + id,
      method: "PUT",
      data: item
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
      return vm.cart;
    });
  };
  vm.removeItem = (id) => {
    return $http({
      url: "/cart-items/" + id,
      method: "DELETE"
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