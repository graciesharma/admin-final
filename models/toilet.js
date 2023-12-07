const sequelize = require("../db");
const { DataTypes, Model } = require("sequelize");
const Review = require("./review");

class Toilet extends Model {}

Toilet.init(
  {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        // Parse the stored string into an array when fetching from the database
        const rawValue = this.getDataValue("tags");
        return rawValue ? rawValue.split(",") : [];
      },
      set(value) {
        // Join the array into a string for storage in the database
        this.setDataValue("tags", value.join(","));
      },
    },
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
