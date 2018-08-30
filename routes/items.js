"use strict";
const express = require("express");
const items = express.Router();
const pool = require("../pg-connection-pool.js");

items.get("/cart-items", (req, res) => {
  pool.query("select * from shoppingcart order by id").then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  });
});

items.post("/cart-items", (req, res) => {
  pool.query("insert into shoppingcart (product, price, quantity) values ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity])
  .then(() => {
    pool.query("select * from shoppingcart order by id").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});

items.put("/cart-items/:id", (req, res) => {
  pool.query("update shoppingcart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int", [req.body.product, req.body.price, req.body.quantity, parseInt(req.params.id)])
  .then(() => {
    pool.query("select * from shoppingcart order by id").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});

items.delete("/cart-items/:id", (req, res) => {
  pool.query("delete from shoppingcart where id=$1::int", [parseInt(req.params.id)])
  .then(() => {
    pool.query("select * from shoppingcart order by id").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});

module.exports = items;