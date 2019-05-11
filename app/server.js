var path = require("path");
var express = require("express");
var users = require("./data/friends");

var app = express();

// `process.env.PORT || 3000` ensures we connect to the correct port when deployed
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

///////////////////////////////////////


///////////////////////////////////////

app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});
