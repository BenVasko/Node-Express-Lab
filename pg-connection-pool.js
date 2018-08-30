"use strict";
const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "MakinBacon57",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",
  ssl: false
});

module.exports = pool;