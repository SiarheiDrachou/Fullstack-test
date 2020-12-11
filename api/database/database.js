const Sequelize = require('sequelize')

const DB_NAME = 'mydb'
const USER_NAME = 'root'
const PASSWORD = '12345678'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  insecureAuth: true,
  dialectOptions: {
    "options": {
      validateBulkLoadParameters: true
    }
  },
  encrypt: true,
  packetSize: 32768
});

module.exports = sequelize