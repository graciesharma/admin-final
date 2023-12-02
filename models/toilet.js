const sequelize = require("../db");
const { DataTypes, Model } = require("sequelize");
const Review = require("./review");

class Toilet extends Model {}

Toilet.init(
  {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    tags: DataTypes.STRING,
    description: DataTypes.STRING,
    coords: DataTypes.JSON,
    images: DataTypes.STRING,
    openingTime: DataTypes.STRING,
    closingTime: DataTypes.STRING,
    locationName: DataTypes.STRING,
    countryName: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "toilet",
  }
);

Toilet.hasMany(Review);
Review.belongsTo(Toilet);

module.exports = Toilet;
