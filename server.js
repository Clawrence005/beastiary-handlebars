// var express = require("express");

// var app = express();
// var PORT = process.env.PORT || 3000;
// var exphbs = require("express-handlebars");

// var monsters = require("./data/monstersData.json");
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
let list2 = [{
  name: "Ghouls",
  routeName: "ghoul",
  malicious: true,
  description: "a",
  foods: [
    "cats",
    "humans",
    "goats"
  ],
  location: "a",
  photo: "../assets/0d415c72a02ca63254db865c1d0c1f96.gif"
},
{
  name: "Jinn",
  routeName: "jinn",
  malicious: true,
  description: "b",
  foods: [
    "cats",
    "humans",
    "goats"
  ],
  location: "a",
  "photo": "../assets/12271233430751.56aaa2bdaf27f.png"
},
{
  name: "la Llorona",
  routeName: "lallorona",
  description: "A sprectral 'wailing woman' in Spanish she haunts river and ditch banks searching for the children she drowned in madness.",
  malicious: true,
  foods: [
    "children"
  ],
  location: "found along rivers and ditches thoughout the Spanish speaking regions of the Americas.",
  photo: "../assets/e4e8ebdc.jpg"
},];

var express = require("express");
const app = require("express")();
const path = require("path");
var PORT = process.env.PORT || 5000;
var monsters = require("./data/monstersData.json");
// Set views directory and views engine as Handlebars using,
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
// serve static files
app.use(express.static(__dirname + '/public'));
// Setup a GET route at ‘/’ using,
app.get("/", (req, res) => {
  console.log("monster", monsters);

  res.render("index", { listitem: monsters, listitem2: list2 });
});

app.get("/mon", function (req, res) {
  res.json({ monsters });
});

app.get('/data', function (req, res, next) {
  res.json({ monsters });
});


app.get("/beastiary/:routeName", function (req, res, next) {
  for (var i = 0; i < list2.length; i++) {
    if (list2[i].routeName === req.params.routeName) {
      res.render("beast", list2[i]);
    }
    // else if (list2[i].routeName != req.params.routeName) {
    //   res.status(404);
    //   res.render('404page');
    // }
    else {
      // res.status(404);
      // res.render('404page');
    }

  }
});
app.use(function (req, res) {
  res.status(404);
  res.render('404page');

});

// app.get("beastiary/:routeName", function (req, res) {
//   for (let i = 0; i < list2.length; i++) {
//     if (list2[i].routeName === req.params.name) {
//       return res.render("beasts", list2[i]);
//     }
//   }
// })


// Finally, setup port for our application using,
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});
