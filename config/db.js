require("mysql2");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("javis_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  timezone: "+07:00",
  dialectOptions: {
    timezone: "local",
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected");
  } catch (error) {
    console.error("MySQL Connection Error:", error);
  }
};

module.exports = { sequelize, connectDB };