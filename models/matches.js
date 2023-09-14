const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Team = require('./teams'); 

const Matches = sequelize.define('Matches', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  team1: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Team,
      key: 'team_name',
    },
  },
  team2: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Team,
      key: 'team_name',
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  venue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Matches;
