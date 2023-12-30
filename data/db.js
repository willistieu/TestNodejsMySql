require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const Config = require("./db.config");

const sequelize = new Sequelize(Config.DB, Config.USER, Config.PASSWORD, {
  host: Config.HOST,
  dialect: Config.dialect,
  operationsAliases: false,
  pool: {
    max: Config.pool.max,
    min: Config.pool.min,
    acquire: Config.pool.acquire,
    idle: Config.pool.idle,
  },
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { connectDB, sequelize, Sequelize, DataTypes };
