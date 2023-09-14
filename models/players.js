const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('Player', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: 'Team',
      key: 'team_name',
    },
  },
  matches_played: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  runs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  average: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  strike_rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Player;