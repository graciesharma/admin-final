const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Review extends Model {}

Review.init(
  {
    rating: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING,
    fullName: DataTypes.STRING,
    toiletId: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "review",
  }
);

module.exports = Review;
