const Sequelize = require("sequelize");
const db = require("../database/database");

const deliveries = db.define("deliveries", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false
    },
    interval: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
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

module.exports = deliveries