const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require('./src/middlewares/errorHandler');
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.use(errorHandler);
// include application routes
require("./src/routes/user.route.js")(app);

// Create & Listen Server
  const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Application request listening at http://%s:%s", host, port);
});
