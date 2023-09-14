const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize('postgres', USER_NAME, PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

module.exports = sequelize;