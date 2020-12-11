const Sequelize = require("sequelize");
const db = require("../database/database");

const orders = db.define("orders", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });

module.exports = orders