const db = require("../config/db.config.js");
const User = db.user;

// Post a user
exports.create = (req, res) => {
  // Save to MySQL database
  try{
  User.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    phone_number: req.body.phone_number,
  }).then((user) => {
    res.status(200).json({
      status: true,
      message: "User created successfully",
    });
  });
}
catch(e){
res.status(404).json({
  status: false,
  message: "Error Occured",
});
}
};

// Get all users
exports.findAll = (req, res) => {
  try{
  User.findAll().then((users) => {
    // Send all users as response
    res.status(200).json({
      status: true,
      data: users,
    });
  });
}
catch(e){
res.status(404);
}
};

// Find a user by Id
exports.findByPk = (req, res) => {
  User.findByPk(req.params.userId).then((user) => {
    res.status(200).json({
      status: true,
      data: user,
    });
  });
};

// Update a user
exports.update = (req, res) => {
  const id = req.params.userId;
  User.update(
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      phone_number: req.body.phone_number,
    },
    { where: { id: req.params.userId } }
  ).then(() => {
    res.status(200).json({
        status: true,
        message: "User updated successfully with id = " + id
    });
  });
};

// Delete a user by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  User.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
        status: true,
        message: "User deleted successfully with id = " + id
    });
  });
};
