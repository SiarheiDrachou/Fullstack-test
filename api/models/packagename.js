const Sequelize = require("sequelize");
const db = require("../database/database");

const packagename = db.define("packagename", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
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

module.exports = packagename