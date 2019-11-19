var express = require("express");

var PORT = process.env.PORT || 5000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var express = require("express");
// const app = require("express")();
// const path = require("path");
// var PORT = process.env.PORT || 5000;
var monsters = require("./data/monstersData.json");

// // Set views directory and views engine as Handlebars using,
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "handlebars");
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // serve static files
// app.use(express.static(__dirname + '/public'));
// Setup a GET route at ‘/’ using,

app.get("/", (req, res) => {
  console.log("monster", monsters[0]);

  res.render("index", {
    // listitem: monsters,
    //  listitem2: list2,
    monsterslist: monsters
  });
});


app.get('/data', function (req, res, next) {
  res.json(monsters);

});


app.get("/beastiary/:routeName", function (req, res, next) {

  for (var i = 0; i < monsters.length; i++) {
    if (monsters[i].routeName === req.params.routeName) {
      res.render("beast", monsters[i]);
    }
    // else if (list2[i].routeName != req.params.routeName) {
    //   res.status(404);
    //   res.render('404page');
    // }
    // else {
    // res.status(404);
    // res.render('404page');
    // }

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
