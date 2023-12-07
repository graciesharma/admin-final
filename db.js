// db.js
const { Sequelize } = require("sequelize");
const config = require("./config/config.json");

const sequelize = new Sequelize({
  dialect: "sqlite", // Specify SQLite as the database dialect
  storage: config.development.storage, // Use the storage path from your config file
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    sequelize.sync(); // This line creates the necessary tables in the database.
  })
  .catch((error) => console.error("Unable to connect to the database:", error));

module.exports = sequelize;
