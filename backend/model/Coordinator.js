const Sequelize = require("sequelize");
const conn = require("../database/database");

const Coordinator = conn.define("coordinator", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Coordinator.sync({ force: false }).then(() => {
  console.log("coordinator table retrieved");
});
module.exports = Coordinator;
