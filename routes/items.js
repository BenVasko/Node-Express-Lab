"use strict";
const express = require("express");
const items = express.Router();
const cart = [
  {
    id: 0,
    product: "Ring",
    price: 20,
    quantity: 2
  },
  {
    id: 1,
    product: "Popcicle",
    price: 2,
    quantity: 10
  },
  {
    id: 2,
    product: "Boot",
    price: 100,
    quantity: 1
  }
];

items.get("/cart-items", (req, res) => {
  res.send(cart);
});

items.post("/cart-items", (req, res) => {
  console.log(req.body);
});

items.put("/cart-items/:id", (req, res) => {
  console.log(req.body.id);
  console.log(req.body);
});

items.delete("/cart/item/:id", (req, res) => {
  console.log(req.body.id);
});

module.exports = items;