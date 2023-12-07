"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("toilets", "tags", {
      type: Sequelize.STRING, // Change to STRING for SQLite
      allowNull: true,
      get() {
        // Parse the stored string into an array
        const rawValue = this.getDataValue("tags");
        return rawValue ? rawValue.split(",") : [];
      },
      set(value) {
        // Join the array into a string for storage
        this.setDataValue("tags", value.join(","));
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("toilets", "tags", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
