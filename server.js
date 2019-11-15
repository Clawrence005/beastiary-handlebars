var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;
var exphbs = require("express-handlebars");

var monsters = require("./data/monstersData.json");
console.log("monsters", monsters)

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});