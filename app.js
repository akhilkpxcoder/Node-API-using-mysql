const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
// include application routes
require("./src/routes/user.route.js")(app);
app.all("*", (req, res) => {
  res.status(404);
  res.send("You've tried reaching a route that doesn't exist.");
});
// Create & Listen Server
  const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Application request listening at http://%s:%s", host, port);
});
