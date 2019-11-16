// var express = require("express");

// var app = express();
// var PORT = process.env.PORT || 3000;
// var exphbs = require("express-handlebars");

var monsters = require("./data/monstersData.json");
// console.log("monsters", monsters.monsterData[9])

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


// var express = require('express');
// var router = express.Router();

// router.get('/', function (req, res) {
//   res.render('home', { layout: 'default', template: 'home-template' });
// });

// router.get('/cat', function (req, res) {
//   res.render("hi cat");
// })

// app.listen(PORT, function () {
//   console.log("App listening on PORT " + PORT);
// });

const app = require("express")();
const path = require("path");
// Set views directory and views engine as Handlebars using,
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")
// Setup a GET route at ‘/’ using,
app.get("/", (req, res) => {

  let list = ["abra", "cadabra"]
  // console.log("monster", monster.monsterData)
  res.render("index", { listitem: list });
});


// Finally, setup port for our application using,
app.listen(5000);