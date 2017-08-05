var express = require('express');
var app = express();

var routes = {
  home: app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  }),

  reserve: app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/reserve.html"));
  }),

  tables: app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/table.html"));
  })
};

module.exports = routes;
