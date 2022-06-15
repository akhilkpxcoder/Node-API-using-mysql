module.exports = function (app) {
  
  const user = require("../controllers/user.controller");
  
    // Create a new user
    app.post("/user", user.create);
  
    // Retrieve all user
    app.get("/users", user.findAll);
  
    // Retrieve a single user by Id
    app.get("/users/:userId", user.findByPk);
  
    // Update a user with Id
    app.put("/users/:userId", user.update);
  
    // Delete a user with Id
    app.delete("/users/:userId", user.delete);
  };
  