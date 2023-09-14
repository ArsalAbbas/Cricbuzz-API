const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Team = sequelize.define('Teams', {
  team_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Team;


