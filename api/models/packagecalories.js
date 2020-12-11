const Sequelize = require("sequelize");
const db = require("../database/database");

const packagecalories = db.define("packagecalories", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    orders_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });

module.exports = packagecalories