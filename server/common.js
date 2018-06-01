const express = require("express");
const handlebars = require("hbs");
const bodyparser = require("bodyParser");
const app = express();
app.set("view engine", handlebars);
app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
  }));

  module.exports = app;