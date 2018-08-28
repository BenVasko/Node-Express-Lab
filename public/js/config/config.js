"use strict";
angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
      .when("/cart-items", {
        template: "<cart-items></cart-items>"
      })
      .otherwise({ redirectTo: "/cart-items" });
  });