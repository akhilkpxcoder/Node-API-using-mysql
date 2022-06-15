const db = require("../config/db.config.js");
const User = db.user;
const logger = require("../middlewares/logger");

// Post a user
exports.create = (req, res) => {
  // Save to MySQL database
  const email = req.body.email;
  try
  {
    if (User.findOne({email})) {
      res.status(500).json({
        Message: 'Email ' + req.body.email + ' is already registered',
      });
      throw 'Email "' + req.body.email + '" is already registered';
  }
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
} catch (err) {
  logger.info(err);
  res.status(500).json({
    Message: err.message,
  });
}
};

// Get all users
exports.findAll = (req, res) => {
  try
  {
  User.findAll().then((users) => {
    // Send all users as response
    res.status(200).json({
      status: true,
      data: users,
    });
  });
} catch (err) {
  logger.info(err);
  res.status(500).json({
    Message: err.message,
  });
}
};

// Find a user by Id
exports.findByPk = (req, res) => {
  try
  {
  User.findByPk(req.params.userId).then((user) => {
    res.status(200).json({
      status: true,
      data: user,
    });
  });
} catch (err) {
  logger.info(err);
  res.status(500).json({
    Message: err.message,
  });
}
};

// Update a user
exports.update = (req, res) => {
  const id = req.params.userId;
  try
  {
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
} catch (err) {
  logger.info(err);
  res.status(500).json({
    Message: err.message,
  });
}
};

// Delete a user by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  try
  {
  User.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
        status: true,
        message: "User deleted successfully with id = " + id
    });
  });
} catch (err) {
  logger.info(err);
  res.status(500).json({
    Message: err.message,
  });
}
};
