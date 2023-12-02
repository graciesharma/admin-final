// db.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    sequelize.sync(); // This line creates the necessary tables in the database.
  })
  .catch((error) => console.error("Unable to connect to the database:", error));

module.exports = sequelize;
