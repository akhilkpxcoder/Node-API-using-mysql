module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING(100),
        allowNull: false 
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false 
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false 
      },
      phone_number: {
        type: Sequelize.STRING(100),
        allowNull: false 
      },
    }, {
        timestamps: true
    });
  
    return User;
  };
  