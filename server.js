"use strict";
const express = require("express");
const app = express();
const items = require("./routes/items");

app.use(express.json());
app.use(express.static("./public"));
app.use("/", items);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});